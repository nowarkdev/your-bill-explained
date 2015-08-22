import React from 'react';
import {toPounds} from './format.js';
import Section from './Section.jsx';

import SVGIcon from './SVGIcon.jsx';

class Subscriptions extends React.Component {
  render() {
    return (
      <Section data={{title: 'Your Packages', total: this.props.data.total}}>
        <ul className="packages">
          {
            this.props.data.subscriptions.map(subscription => {
              return (
                <li className={`package--${subscription.type}`}>
                  <SVGIcon name={subscription.type} className="svg-icon--white"/>
                  <div className="subscription__name">{subscription.name}</div>
                  <div className="subscription__cost">{toPounds(subscription.cost)}</div>
                </li>
              );
            })
          }
        </ul>
      </Section>
    );
  }
}

export default Subscriptions;
