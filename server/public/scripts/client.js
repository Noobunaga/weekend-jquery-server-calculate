$(document).ready(handleReady);

function handleReady() {
  console.log("loaded and locked!")
  // when user clicks equal, run function

//   $('#operator').on('click', differentOperator);
    $('#equalBtn').on('click', answerInputs);
    $('#clearBtn').on('click', clearInputs);
    $('addButton').on('click', addOperator);
    $('subButton').on('click', subOperator);
    $('divButton').on('click', divOperator);
    $('multButton').on('click', multOperator);

}

function answerInputs(){
    const input1 = $('#input1').val();
    const input2 = $('#input2').val();
}

function addOpertor(){
    console.log('Addition')
    mathOperator='+';
}

function subOpertor(){
    console.log('Subtraction')
    mathOperator='-';
}

function divOpertor(){
    console.log('Division')
    mathOperator='/';
}

function multOpertor(){
    console.log('Multiply')
    mathOperator='*';
}

function clearInputs(){
    $('#input1').val('');
    $('#input2').val('');
}
// let operator;

// function differentOperator(){
//   return operator= $(this).data('id');
// }


//   // send to server
//   $.ajax({
//     //type
//     method: 'POST',
//     url: '/math',
//     data: {inputArray:
//         [input1, input2]
//     } //data becomes req.body on server
// })
// .then( function(response) {
//     // successful send case
//     console.log('posted item', response);
// })
// .catch( function(err) {
//     //server.js returned error case
//     console.log('failed to post', err);
// })
// }