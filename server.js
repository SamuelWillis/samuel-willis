const express = require('express');
const path = require('path');

const port = process.env.PORT || 6969;

const app = express();

app.use(express.static(`${__dirname}/public`));

// Serve Vue App
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.listen(port, () => {
  if (process.env !== 'dev') {
    return;
  }

  console.log(`samuel willis dev: http://localhost:${port}`); // eslint-disable-line no-console
});
