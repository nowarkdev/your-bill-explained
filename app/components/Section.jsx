import React from 'react';
import SectionHeader from './SectionHeader.jsx';

class Section extends React.Component {

  render() {
    return (
      <div className="statement__section">
        <SectionHeader data={this.props.data} />
        <div className="section__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
