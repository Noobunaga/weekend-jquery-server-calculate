const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const previousCalculation = [];
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.json() );

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/math', (req, res) => {
  console.log('POST /math body:', req.body);
  let firstNum = req.body.firstNum;
  let secondNum = req.body.secondNum;
  let operator = req.body.operator;
  let answer = 0;

  switch(operator){
    case '+':
      answer = Number(firstNum) + Number(secondNum);
      break;
    case '-':
      answer = Number(firstNum) - Number(secondNum);
      break;
    case '/':
      answer = Number(firstNum) / Number(secondNum);
      break;
    case '*':
      answer = Number(firstNum) * Number(secondNum);
      break:
  }
  
  // always respond
  res.sendStatus(201); // 201 is good!
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


