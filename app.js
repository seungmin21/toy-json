const express = require('express');
const app = express();
const PORT = 4050;
const user = require('./route');

app.use('/', user);

app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
})