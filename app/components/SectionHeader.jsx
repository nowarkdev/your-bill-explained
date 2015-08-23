import React from 'react';
import {toPounds} from './format.js';


class SectionHeader extends React.Component {

  constructor() {
    super();
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(event) {
    if (typeof this.props.onHeaderClick === 'function') {
      this.props.onHeaderClick(event);
    }
  }

  getIcon() {
    if (typeof this.props.onHeaderClick === 'function') {
      return (<div className="section-header__icon"></div>);
    }

    return null;
  }

  render() {

    return (
      <div className="section-header" onClick={this.handleHeaderClick}>
        {this.getIcon()}
        <div className="section-header__title">{this.props.data.title}</div>
        <div className="section-header__cost">{toPounds(this.props.data.total)}</div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default SectionHeader;
