const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const Post = mongoose.model('BlogPost', BlogPost);

//Create

let post = new Post({ title: 'Example Title', body: 'Example body' });
post.save((err, post) => {
  if (err) return console.error(err);
  console.log(post.title + " saved to bookstore collection.");
});

//Read
Post.find((err, posts) => {
    if (err) return console.error(err);
    console.log(posts);
  });


//Update

Post.updateOne({ title: 'Example Title' }, { title: 'New Example Title' }, (err, res) => {
    if(err) return console.error(err);
    console.log(res);
  });

//Delete

Post.deleteOne({ title: 'New Example Title' }, (err) => {
    if(err) return console.error(err);
    console.log('Deleted successfully');
  });