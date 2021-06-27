$(document).ready(handleReady);

let operator = '';

function handleReady() {
  console.log("loaded and locked!")
  // when user clicks equal, run function

//   $('#operator').on('click', differentOperator);
    $('#equalBtn').on('click', doMath);
    $('#clearBtn').on('click', clearInputs);
    $('.operatorBtn').on('click', function(){
        operator = $(this).html();
    })

}

// function numberInputs(){
//     const input1 = $('#input1').val();
//     const input2 = $('#input2').val();
//}


function clearInputs(){
    $('#input1').val('');
    $('#input2').val('');
}

function doMath(){
    let firstNum = $('#input1').val();
    let secondNum = $('#input2').val();
    let mathPackage = {
        firstNum: firstNum,
        secondNum: secondNum,
        operator: operator
    }
}


$.ajax({
    method:'POST',
    url:'/math',
    data: mathPackage
}).then(
    response => {
        let answer = response.answer;
        $('#answer').html(`<h2>${answer}</h2>`);
        displayHistory();
    }
)