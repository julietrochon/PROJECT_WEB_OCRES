const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});


//connect
mongoose.connect(
    "mongodb+srv://JulieHadrienProjet:EceWeb@rest.xnzm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);


app.listen(3000);


/* fetch("http://localhost:3000/posts")
  .then((result) => {
  return result.json();
})
.then(data =>{
  console.log(data);
}) */