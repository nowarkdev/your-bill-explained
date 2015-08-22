import React from 'react/addons';

const data = {
  "rentals": [
    { "title": "50 Shades of Grey", "cost": 4.99 }
  ],
  "buyAndKeep": [
    { "title": "That's what she said", "cost": 9.99 },
    { "title": "Brokeback mountain", "cost": 9.99 }
  ],
  "total": 24.97
};

jest.dontMock('../app/components/SkyStore.jsx');

describe('SkyStore', function() {
  var TestUtils = React.addons.TestUtils;
  var SkyStore;

  beforeEach(function() {
    SkyStore = require('../app/components/SkyStore.jsx');
  });

  it('should exists', function() {
    var skyStore = TestUtils.renderIntoDocument( <SkyStore data={data}/> );
    expect(TestUtils.isCompositeComponent(skyStore)).toBeTruthy();
  });

  it('should generate the layout from an object passed as props', () => {
    var skyStore = TestUtils.renderIntoDocument( <SkyStore data={data}/> );

    let lists = TestUtils.scryRenderedDOMComponentsWithClass(skyStore, 'store-list');

    let movieTitles = TestUtils.scryRenderedDOMComponentsWithClass(skyStore, 'store-item__title');
    let movieCosts = TestUtils.scryRenderedDOMComponentsWithClass(skyStore, 'store-item__cost');

    expect(lists.length).toEqual(2);
    expect(lists[0].getDOMNode().childNodes.length).toEqual(1);

    expect(movieTitles.length).toEqual(3);
    expect(movieCosts.length).toEqual(3);

    expect(movieTitles[0].getDOMNode().textContent).toEqual("50 Shades of Grey");
    expect(movieCosts[0].getDOMNode().textContent).toEqual("£120.00");
  });
});
