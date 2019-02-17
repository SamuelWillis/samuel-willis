const express = require('express');
const path = require('path');

const port = process.env.PORT || 6969;

const app = express();

// Serve Vue App
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/dist/index.html`));
});

app.listen(port, () => {
  if (process.env !== 'dev') {
    return;
  }

  console.log(`samuel willis dev: http://localhost:${port}`); // eslint-disable-line no-console
});
