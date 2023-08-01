const express = require('express');
const axios = require('axios');
const app = express();

app.get('/posts', (req, res) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        res.status(500).send();
      });
  });

app.listen(3002, () => console.log('Posts Service running on port 3002'));
