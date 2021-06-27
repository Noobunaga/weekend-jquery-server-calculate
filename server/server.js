const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.json() );

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/inputs', (req, res) => {
  console.log('in post for inputs', req.body);

  // generate random number
  let generatedRandomNumber = randomNumber();
  console.log(generatedRandomNumber);

  // compare inputs to random number
  // req.body: contains array of input objects; filter out only the ones that match generatedRandomNumber
  //Object.values(req.body.inputArray).filter(element => Number(element) === generatedRandomNumber);
  checkAnswers(req.body.inputArray, generatedRandomNumber);
  
  // always respond
  res.sendStatus(201); // 201 is good!
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})