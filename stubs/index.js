const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDewMidleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require('./settings');
const getHash = require('./config');

const app = express();

const { applyHbs } = require("./template");

const webPackConfig = require('../webpack.config.develop');
const compiler = webpack(webPackConfig)

applyHbs(app);

app.use(
  webpackDewMidleware(compiler, {
    publicPath: webPackConfig.output.publicPath,
    stats: false,
    noInfo: true
  })
)

app.use(webpackHotMiddleware(compiler));

app.post('/hash', getHash.post)

app.use(["/"], function (req, res) {
  res.render("index.hbs", {
    ...config
  })
});


app.listen(3002, () => {
  console.log('port 3002');
})

module.exports = app