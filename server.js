'use strict'

const express = require('express');
const app = express();
const sa = require('superagent');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/repos', (req, res) => {
  sa.get('https://api.github.com/user/repos')
    .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .end((err, result) => {
      if(err) console.log(err);
      res.send(result.body);
    });
});

app.listen(PORT, function(){
  console.log(`Port Number: ${PORT}`);
});
