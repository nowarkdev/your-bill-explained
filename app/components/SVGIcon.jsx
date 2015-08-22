import React from 'react';

let icons = {
  broadband: {
    path: 'M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z'
  },
  tv: {
    path: 'M20,17H4V5H20M20,3H4C2.89,3 2,3.89 2,5V17A2,2 0 0,0 4,19H8V21H16V19H20A2,2 0 0,0 22,17V5C22,3.89 21.1,3 20,3Z'
  },
  talk: {
    path: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
  }
}

class SVGIcon extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.name !== this.props.name || nextProps.className !== this.props.className;
  }

  render() {
    let image = icons[this.props.name] || {};

    let svgCls = `svg-icon svg-icon-${this.props.name} ${this.props.className || ''}`;

    return (
      <svg className={svgCls} x='0px' y='0px' width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
        <path d={image.path || ''} />
      </svg>
    );
  }
}

export default SVGIcon;
