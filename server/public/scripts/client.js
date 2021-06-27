$(document).ready(handleReady);

function handleReady() {
  console.log("loaded and locked!")
  // when user clicks equal, run function

//   $('#operator').on('click', differentOperator);
    $('#clearBtn').on('click', clearInputs);

}


function clearInputs(event){
    event.preventDefault();
    $('#input1').val('');
    $('#input2').val('');
}
// let operator;

// function differentOperator(){
//   return operator= $(this).data('id');
// }


// function submitNumbers() {
//   //get input values
//   let input1 = Number($('#input1').val());
//   let input2 = Number($('#input2').val());


  //send to server
  $.ajax({
    //type
    method: 'POST',
    url: '/inputs',
    data: {inputArray:
        [input1, input2]
    } //data becomes req.body on server
})
.then( function(response) {
    // successful send case
    console.log('posted item', response);
})
.catch( function(err) {
    //server.js returned error case
    console.log('failed to post', err);
})
}