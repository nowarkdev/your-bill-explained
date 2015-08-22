import React from 'react/addons';
jest.dontMock('../app/components/SectionHeader.jsx');

const data = {
  title: 'Section title',
  total: 120
};

describe('SectionHeader', function() {
  var TestUtils = React.addons.TestUtils;
  var SectionHeader;

  beforeEach(function() {
    SectionHeader = require('../app/components/SectionHeader.jsx');
  });

  it('should exists', function() {
    var sectionHeader = TestUtils.renderIntoDocument(<SectionHeader data={data}/>);
    expect(TestUtils.isCompositeComponent(sectionHeader)).toBeTruthy();
  });

  it('should build the layout an object passed as props', () => {
    let sectionHeader = TestUtils.renderIntoDocument(<SectionHeader data={data} />);
    let title = TestUtils.scryRenderedDOMComponentsWithClass(sectionHeader, 'section-header__title');
    let cost = TestUtils.scryRenderedDOMComponentsWithClass(sectionHeader, 'section-header__cost');

    expect(title.length).toEqual(1);
    expect(cost.length).toEqual(1);

    expect(title[0].getDOMNode().textContent).toEqual('Section title');
    expect(cost[0].getDOMNode().textContent).toEqual('£120.00');
  })
});
