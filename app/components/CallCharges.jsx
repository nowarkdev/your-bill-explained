import React from 'react';
import {toPounds} from './format.js';
import Section from './Section.jsx';

class CallCharges extends React.Component {
  render() {
    return (
      <Section data={{title: 'Call Charges', total: this.props.data.total}}>
        <table className="call-charges">
          <thead>
            <tr className="call-charges__item--header">
              <th className="call-charge__number">Called number</th>
              <th className="call-charge__duration">Length</th>
              <th className="call-charge__cost">Call cost</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.calls.map(call => {
                return (
                  <tr className="call-charges__item">
                    <td className="call-charge__number">{call.called}</td>
                    <td className="call-charge__duration">{call.duration}</td>
                    <td className="call-charge__cost">{toPounds(call.cost)}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </Section>
    );
  }
}

export default CallCharges;
