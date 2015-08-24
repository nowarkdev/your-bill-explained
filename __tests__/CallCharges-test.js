import React from 'react/addons';

const data = {
  "calls": [
    { "called": "07716393769", "duration": "00:23:03", "cost": 120 },
    { "called": "07716393769", "duration": "00:23:03", "cost": 120 },
    { "called": "07716393769", "duration": "00:23:03", "cost": 120 },
    { "called": "07716393769", "duration": "00:23:03", "cost": 120 }
  ],
  "total": 480
};

jest.dontMock('../app/components/CallCharges.jsx');

describe('CallCharges', function() {
  var TestUtils = React.addons.TestUtils;
  var CallCharges;

  beforeEach(function() {
    CallCharges = require('../app/components/CallCharges.jsx');
  });

  it('should exists', function() {
    var callCharge = TestUtils.renderIntoDocument( <CallCharges data={data}/> );
    expect(TestUtils.isCompositeComponent(callCharge)).toBeTruthy();
  });

  it('should generate the layout from an object passed as props', () => {
    var callCharge = TestUtils.renderIntoDocument( <CallCharges data={data}/> );

    let list = TestUtils.scryRenderedDOMComponentsWithClass(callCharge, 'call-charges');
    let callChargeNumber = TestUtils.scryRenderedDOMComponentsWithClass(callCharge, 'call-charge__number');
    let callChargeDuration = TestUtils.scryRenderedDOMComponentsWithClass(callCharge, 'call-charge__duration');
    let callChargeCost = TestUtils.scryRenderedDOMComponentsWithClass(callCharge, 'call-charge__cost');

    expect(list.length).toEqual(1);
    expect(list[0].getDOMNode().lastChild.childNodes.length).toEqual(4);

    expect(callChargeNumber.length).toEqual(5);
    expect(callChargeDuration.length).toEqual(5);
    expect(callChargeCost.length).toEqual(5);

    expect(callChargeNumber[1].getDOMNode().textContent).toEqual("07716393769");
    expect(callChargeDuration[1].getDOMNode().textContent).toEqual("00:23:03");
    expect(callChargeCost[1].getDOMNode().textContent).toEqual("£120.00");
  });
});
