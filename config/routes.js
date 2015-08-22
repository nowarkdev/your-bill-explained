import express from 'express';
import React from 'react';
import fs from 'fs';
import path from 'path';
import qajax from 'qajax';

import Bill from '../app/components/Bill.jsx';

let router = express.Router();
var indexHTML = fs.readFileSync(path.join(__dirname, '../app/views/index.html')).toString();
var htmlRegex = /¡HTML!/;
var dataRegex = /¡DATA!/;

router.get('/', (request, response) => {
  qajax('https://still-scrubland-9880.herokuapp.com/bill.json')
  .then(qajax.filterSuccess)
  .then(qajax.toJSON)
  .then(data => {
    let reactHtmlString = React.renderToString(<Bill data={data} />);

    let output = indexHTML
       .replace(htmlRegex, reactHtmlString)
       .replace(dataRegex, JSON.stringify(JSON.stringify(data)));

    response.send(output);
  });
});

export default router;
