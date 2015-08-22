import React from 'react/addons';

const data = {
  title: 'Section title',
  total: 120
};

jest.dontMock('../app/components/Section.jsx');

describe('Section', function() {
  var TestUtils = React.addons.TestUtils;
  var Section;

  beforeEach(function() {
    Section = require('../app/components/Section.jsx');
  });

  it('should exists', function() {
    var section = TestUtils.renderIntoDocument( <Section data={data}/> );
    expect(TestUtils.isCompositeComponent(section)).toBeTruthy();
  });

  it('should generate the layout with a section header and section content', () => {
    var section = TestUtils.renderIntoDocument(<Section data={data}><div>Content</div></Section>);

    let headers = TestUtils.scryRenderedDOMComponentsWithClass(section, 'section-header');
    let contents = TestUtils.scryRenderedDOMComponentsWithClass(section, 'section__content');

    expect(headers.length).toEqual(1);
    expect(contents.length).toEqual(1);

    expect(contents[0].getDOMNode().firstChild.firstChild.textContent).toEqual('Content');
  });
});
