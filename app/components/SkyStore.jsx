import React from 'react';
import {toPounds} from './format.js';
import Section from './Section.jsx';

class SkyStore extends React.Component {
  render() {
    return (
      <Section data={{title: 'Sky Store', total: this.props.data.total}}>
        <div className="section__subtitle">Rentals</div>
        <table className="store-list">
          {
            this.props.data.rentals.map(movie => {
              return (
                <tr className="store-list__item">
                  <td className="store-item__title">{movie.title}</td>
                  <td className="store-item__cost">{toPounds(movie.cost)}</td>
                </tr>
              );
            })
          }
        </table>
        <div className="section__subtitle">Buy and keep</div>
        <table className="store-list">
          {
            this.props.data.buyAndKeep.map(movie => {
              return (
                <tr className="store-list__item">
                  <td className="store-item__title">{movie.title}</td>
                  <td className="store-item__cost">{toPounds(movie.cost)}</td>
                </tr>
              );
            })
          }
        </table>
      </Section>
    );
  }
}

export default SkyStore;
