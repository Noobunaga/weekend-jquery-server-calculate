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


    $.ajax({
        method:'POST',
        url:'/math',
        // req.body is data
        data: {
            firstNum: $('#input1').val(),
            secondNum: $('#input2').val(),
            operator: operator
        }
    })
    .then(
        response => {
            console.log('POST res', res);
            
            previousCalculations();
        })
        .catch(err => {
            console.error('POST failed', err);
        })
}

// function previousCalculations() {
//     $.ajax({
//         method: 'GET',
//         url: '/calculations'
//     })
//         .then( response => {
//             console.log('GET', res);

//             let previousCalculations = res[res.length -1];
//             $('#answer').text(previousCalculations.answer);

//             $('#history').empty();
//             for (let calc of res){
//                 $('#history').append(`
//                     <ul>
//                         ${calc.firstNum} ${calc.operator} ${calc.secondNum} = ${calc.answer}
//                     </ul>
//                 `)
//             }
//         })
// }



