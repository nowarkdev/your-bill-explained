import React from 'react';
import {toUKDate, toDDMM, toPounds} from './format.js';

class BillHeader extends React.Component {

  render() {
    return (
      <div className="bill-header">
        <h2 className="statement__subtitle">Summary</h2>
        <div className="dates">
          <div className="dates__item">
            <div>Bill date</div>
            <div className="statement__date">{toUKDate(this.props.data.generated)}</div>
          </div>
          <div className="dates__item">
            <div>Period</div>
            <div className="statement__date">{toDDMM(this.props.data.period.from)} - {toDDMM(this.props.data.period.to)}</div>
          </div>
          <div className="dates__item">
            <div>Due by</div>
            <div className="statement__date">{toUKDate(this.props.data.due)}</div>
          </div>
        </div>
        <div className="total-amount">
          <div className="total-amount__title">Amount due</div>
          <div className="total-amount__cost">{toPounds(this.props.total)}</div>
        </div>
      </div>
    )
  }
}

export default BillHeader;
