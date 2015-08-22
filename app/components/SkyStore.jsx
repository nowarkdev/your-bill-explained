import React from 'react';
import {toPounds} from './format.js';
import Section from './Section.jsx';

class SkyStore extends React.Component {
  render() {
    return (
      <Section data={{title: 'Sky Store', total: this.props.data.total}}>
        <div className="section__subtitle">Rentals</div>
        <ul className="store-list">
          {
            this.props.data.rentals.map(movie => {
              return (
                <li className="store-list__item">
                  <div className="store-item__title">{movie.title}</div>
                  <div className="store-item__cost">{toPounds(movie.cost)}</div>
                </li>
              );
            })
          }
        </ul>
        <div className="section__subtitle">Buy and keep</div>
        <ul className="store-list">
          {
            this.props.data.buyAndKeep.map(movie => {
              return (
                <li className="store-list__item">
                  <div className="store-item__title">{movie.title}</div>
                  <div className="store-item__cost">{toPounds(movie.cost)}</div>
                </li>
              );
            })
          }
        </ul>
      </Section>
    );
  }
}

export default SkyStore;
