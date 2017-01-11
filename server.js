const path = require('path');
const express = require('express');
const port = (process.env.PORT || 8008);
const https = require("https");

require('es6-promise').polyfill();

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(__dirname + '/'));
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/img', express.static(path.join(__dirname, './img')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log('Listening at http://localhost:' + port);

setInterval(function() {
    https.get("https://poll-vault.herokuapp.com/");
}, 1740000); // ping site every 29 minutes to keep heroku dynos from sleeping
