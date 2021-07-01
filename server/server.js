const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const calculations = [];
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.json() );

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/math', (req, res) => {
  console.log('body', req.body);
  // let firstNum = req.body.firstNum;
  // let secondNum = req.body.secondNum;
  let operator = req.body.operator;
  let answer;

  switch(operator){
    case '+':
      answer = input1(firstNum) + input2(secondNum);
      break;
    case '-':
      answer = input1(firstNum) - input2(secondNum);
      break;
    case '/':
      answer = input1(firstNum) / input2(secondNum);
      break;
    case '*':
      answer = input1(firstNum) * input2(secondNum);
      break;
  }

  calculations.push({
    firstNum: Number(req.body.firstNum),
    secondNum: Number(req.body.secondNum),
    operator: operator,
    answer: answer
  })
  
  res.sendStatus(201); // 201 is good!
});

app.get('/calculations', (req, res) =>{
  res.send(calculations);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT);
});


