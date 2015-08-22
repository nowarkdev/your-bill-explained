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
  "total": 136.03,
  "package": {
    "subscriptions": [
      { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
      { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
      { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
    ],
    "total": 71.40
  },
  "callCharges": {
    "calls": [
      { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
      { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }
    ],
    "total": 59.64
  },
  "skyStore": {
    "rentals": [
      { "title": "50 Shades of Grey", "cost": 4.99 }
    ],
    "buyAndKeep": [
      { "title": "That's what she said", "cost": 9.99 },
      { "title": "Brokeback mountain", "cost": 9.99 }
    ],
    "total": 24.97
  }
};

jest.dontMock('../app/components/Bill.jsx');

describe('Bill', function() {
  var TestUtils = React.addons.TestUtils;
  var Bill;

  beforeEach(function() {
    Bill = require('../app/components/Bill.jsx');
  });

  it('should exists', function() {
    var bill = TestUtils.renderIntoDocument( <Bill data={data}/> );
    expect(TestUtils.isCompositeComponent(bill)).toBeTruthy();
  });
});
