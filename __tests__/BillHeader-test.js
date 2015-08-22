import React from 'react/addons';
const data = {
  "statement": {
    "generated": "2015-01-11",
    "due": "2015-01-25",
    "period": {
      "from": "2015-01-26",
      "to": "2015-02-25"
    }
  },
  "total": 136.03
}

jest.dontMock('../app/components/BillHeader.jsx');

describe('BillHeader', function() {
  var TestUtils = React.addons.TestUtils;
  var BillHeader;

  beforeEach(function() {
    BillHeader = require('../app/components/BillHeader.jsx');
  });

  it('should exists', function() {
    var billHeader = TestUtils.renderIntoDocument( <BillHeader data={data.statement} total={data.total}/> );
    expect(TestUtils.isCompositeComponent(billHeader)).toBeTruthy();
  });
});
