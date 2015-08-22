import React from 'react/addons';

const data = {
  "subscriptions": [
    { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
    { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
    { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
  ],
  "total": 71.40
};

jest.dontMock('../app/components/Subscriptions.jsx');

describe('Subscriptions', function() {
  var TestUtils = React.addons.TestUtils;
  var Subscriptions;

  beforeEach(function() {
    Subscriptions = require('../app/components/Subscriptions.jsx');
  });

  it('should exists', function() {
    var subscriptions = TestUtils.renderIntoDocument( <Subscriptions data={data}/> );
    expect(TestUtils.isCompositeComponent(subscriptions)).toBeTruthy();
  });

  it('should render layout from an object passed as props', () => {
    var subscriptions = TestUtils.renderIntoDocument( <Subscriptions data={data}/> );

    let contents = TestUtils.scryRenderedDOMComponentsWithClass(subscriptions, 'packages');
    let packages = TestUtils.scryRenderedDOMComponentsWithClass(subscriptions, 'subscription__name');

    expect(contents.length).toEqual(1);
    expect(packages.length).toEqual(3);

    expect(packages[0].getDOMNode().textContent).toEqual('Variety with Movies HD');
  });
});
