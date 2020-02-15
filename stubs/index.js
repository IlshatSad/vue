const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("dist"));

app.listen(3000, () => {
  console.log('port 3000');
})

module.exports = app