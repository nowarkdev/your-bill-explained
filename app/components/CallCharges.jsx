import React from 'react';
import {toPounds} from './format.js';
import Section from './Section.jsx';

class CallCharges extends React.Component {
  render() {
    return (
      <Section data={{title: 'Call Charges', total: this.props.data.total}}>
        <ul className="call-charges">
          <li className="call-charges__item--header">
            <div className="call-charge__number">Called number</div>
            <div className="call-charge__duration">Length</div>
            <div className="call-charge__cost">Call cost</div>
          </li>
          {
            this.props.data.calls.map(call => {
              return (
                <li className="call-charges__item">
                  <div className="call-charge__number">{call.called}</div>
                  <div className="call-charge__duration">{call.duration}</div>
                  <div className="call-charge__cost">{toPounds(call.cost)}</div>
                </li>
              );
            })
          }
        </ul>
      </Section>
    );
  }
}

export default CallCharges;
