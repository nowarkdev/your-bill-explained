import React from 'react/addons';

jest.dontMock('../app/components/SVGIcon.jsx');

describe('SVGIcon', function() {
  var TestUtils = React.addons.TestUtils;
  var SVGIcon;

  beforeEach(function() {
    SVGIcon = require('../app/components/SVGIcon.jsx');
  });

  it('should exists', function() {
    var icon = TestUtils.renderIntoDocument( <SVGIcon name=''/> );
    expect(TestUtils.isCompositeComponent(icon)).toBeTruthy();
  });
});
