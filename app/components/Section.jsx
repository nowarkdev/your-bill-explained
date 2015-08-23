import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import classnames from 'classnames';

class Section extends React.Component {

  constructor() {
    super();
    this.state = {
      closed: false
    };

    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  onHeaderClick(event) {
    this.setState({
      closed: !this.state.closed
    });
  }

  componentDidMount() {
    this.setState({
      closed: true
    });
  }

  render() {

    let sectionClass = classnames({
      'statement__section': true,
      'statement__section--closed': this.state.closed
    });

    let sectionContentClass = classnames({
      'section__content': true,
      'section__content--closed': this.state.closed
    });

    return (
      <div className={sectionClass}>
        <SectionHeader data={this.props.data} onHeaderClick={this.onHeaderClick}/>
        <div className={sectionContentClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
