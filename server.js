'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/*', function(there, backAgain) {
  backAgain.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`Port Number: ${PORT}`);
});
