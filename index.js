const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(`Server is running on port ${port}`));

app.post('/user/signup', (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

app.post('/user/signin', (req, res) => {
  res.json({
    message: "signin endpoint"
  })
})

app.post('/course/purchase', (req, res) => {
  res.json({
    message: "purchases endpoint"
  })
})

app.get('/courses', (req, res) => {
  res.json({
    message: "all courses endpoint"
  })
})

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
})