$(document).ready(() => {
  bringQuestions();
});
 let doc = [];

function bringQuestions(){
  // event.preventDefault();
  const questions = document.getElementsByClassName('question');
  const url = `https://opentdb.com/api.php?amount=34&category=20&type=multiple`;

  $.ajax({
    type: "GET",
    url,
    success: getFromDB,
    error,
  })
}

function error(){
  alert("erro");
}

function getFromDB(data){
  for(a of data.results){
    let answers = arrOfAnswers(a.correct_answer, a.incorrect_answers);
    createTemplate(a.question, answers, a.correct_answer);
  }
  setIds();
}
function arrOfAnswers(right, array){
let aleatorio = Math.floor(Math.random() * 4);
array.splice(aleatorio, 0, right);
  return array;
}

function createTemplate(question, arrAns, /*correct, id*/){ /*data-id=""*/
  let result = `
  <div class="olympicQuestion"> 
    <h3 class="question">${question}</h3>
    <button class="btnList" type="submit">${arrAns[0]}</button>
    <button class="btnList" type="submit">${arrAns[1]}</button>
    <button class="btnList" type="submit">${arrAns[2]}</button>
    <button class="btnList" type="submit">${arrAns[3]}</button>
  </div>`
  $("#results").append(result);
  // events(correct);
}

function setIds(){
  // console.log( $('.btnList'));
  for(i of $('.btnList')){
    // console.log(i);
    $(this).attr("data-id");
    console.log($(this));
  }
  // let val = $('.btnList');
  // val.forEach((element, index) => {
  //   console.log(index);
    // $(this).attr("data-id", index)
  // });
  // $('.btnList').data('id') = number;
}

// function events(correct){
// $(`.btnletterA[data-id=${id}]`).on("click", () => {confirmAlternative(correct)});
// // $(".btnletterB").on("click", () => {confirmAlternative(correct)});
// // $(".btnletterC").on("click", () => {confirmAlternative(correct)});
// // $(".btnletterD").on("click", () => {confirmAlternative(correct)});
// }

// function confirmAlternative(answer){
//   console.log("OIOI");
//   // console.log($(this))
//   // if($(this) === answer){
//   //   $(this).attr("class","green");
//   //   counter();
//   // }else{
//   //   $(this).attr("class","red");
//   // }
// }

// function counter(){

// }

/*btnletterA
btnletterB
btnletterC
btnletterD*/