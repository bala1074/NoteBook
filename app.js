'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hey Im note book');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//Configuring routes
require('./controllers/notes')(app);
require('./controllers/books')(app);

