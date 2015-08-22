import React from 'react';
import {toPounds} from './format.js';
import BillHeader from './BillHeader.jsx';
import SectionHeader from './SectionHeader.jsx';
import Subscriptions from './Subscriptions.jsx';
import CallCharges from './CallCharges.jsx';
import SkyStore from './SkyStore.jsx';

class Bill extends React.Component {

  render() {
    return (
      <div className="bill-container">
        <h1 className="statement__title">Your statement</h1>
        <BillHeader data={this.props.data.statement} total={this.props.data.total}/>
        <Subscriptions data={this.props.data.package} />
        <CallCharges data={this.props.data.callCharges} />
        <SkyStore data={this.props.data.skyStore} />
      </div>
    );
  }
}

export default Bill;
