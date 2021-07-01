$(document).ready(handleReady);

let operator = null;

function handleReady() {
  console.log("loaded and locked!")
  // when user clicks equal, run function

//   $('#operator').on('click', differentOperator);
    $('#equalBtn').on('click', doMath);
    $('#clearBtn').on('click', clearInputs);
    $('.operatorBtn').on('click', selectOperator);

}

// function numberInputs(){
//     const input1 = $('#input1').val();
//     const input2 = $('#input2').val();
//}

function selectOperator(){
    console.log('operation picked', $(this).text());
}

function clearInputs(){
    $('#input1').val('');
    $('#input2').val('');
}

function doMath(){
    console.log('doing math');

    // let mathpackage = {
    //     firstNum: firstNum,
    //     secondNum: secondNum,
    //     operator: operator
    // }
    $.ajax({
        method:'POST',
        url:'/math',
        // req.body is data
        data: {
            firstNum: $('#input1').val(),
            secondNum: $('#input2').val(),
            operatorBtn: operator
        }
    })
    .then(
        response => {
            let answer = response.answer;
            $('#answer').html(`<h2>${answer}</h2>`);
            displayHistory();
        }
    )
}


function displayHistory() {
    
}


