import express from 'express';
import logger from './config/logger.js';
import router from './config/routes.js';

let app = express();
app.use(express.static('public'));

app.use(router);

let server = app.listen((process.env.PORT || 2223), () => {
  logger.verbose("Express server listening at " + JSON.stringify(server.address()));
});
