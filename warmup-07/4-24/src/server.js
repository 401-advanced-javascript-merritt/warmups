'use strict';

const express = require('express');
const app = express();

const routes = require('./routes/routes.js');
const notFound = require('./middleware/404.js');
const errorhandler = require('./middleware/500.js');

app.set('view engine', 'ejs');

app.use( express.static(`${__dirname}/../public`) );


app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.use('/', routes);
app.use('*', notFound);
app.use(errorhandler);


module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};
