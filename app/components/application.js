import React from 'react/addons';
import Bill from './Bill.jsx';

let dataForClient = __DATA__ || '';

if (__DATA__) {
  // Server side generated page
  // DataFetching.setToken(JSON.parse(authToken).token, 0);
  dataForClient = JSON.parse(__DATA__);
}

React.render(<Bill data={dataForClient} />, document.body);
