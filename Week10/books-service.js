const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const axios = require('axios');

app.use(express.json());

let books = ["one","two"];

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.write("Hello I am home route");
  });


app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send();
});

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = req.body;

  let index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = book;
    res.send();
  } else {
    res.status(404).send();
  }
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;

  let index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.send();
  } else {
    res.status(404).send();
  }
});
app.listen(3001, () => console.log('Books Service running on port 3001'));