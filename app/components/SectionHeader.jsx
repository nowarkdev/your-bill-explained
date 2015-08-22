import React from 'react';
import {toPounds} from './format.js';

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="section-header">
        <div className="section-header__title">{this.props.data.title}</div>
        <div className="section-header__cost">{toPounds(this.props.data.total)}</div>
      </div>
    );
  }
}

export default SectionHeader;
