const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const calculations = [];
const history = [];
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.json() );

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/math', (req, res) => {
  console.log('body', req.body);
  let firstNum = Number(req.body.firstNum);
  let secondNum = Number(req.body.secondNum);
  let operator = req.body.operator;
  let answer = 0;
  let calcOutput = '';

  switch(operator){
    case '+':
      answer = firstNum + secondNum;
      calcOutput = `${firstNum} + ${secondNum} = ${answer}`;
      break;
    case '-':
      answer = firstNum - secondNum;
      calcOutput = `${firstNum} - ${secondNum} = ${answer}`;
      break;
    case '/':
      answer = firstNum / secondNum;
      calcOutput = `${firstNum} / ${secondNum} = ${answer}`;
      break;
    case '*':
      answer = firstNum * secondNum;
      calcOutput = `${firstNum} * ${secondNum} = ${answer}`;
      break;
  }

  history.push(calcOutput);

  calculations = answer;
  
  res.sendStatus(201); // 201 is good!
});

app.get('/math', (req, res) =>{
  res.json(calculations);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT);
});


