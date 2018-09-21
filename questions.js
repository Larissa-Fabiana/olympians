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
}
function arrOfAnswers(right, array){
let aleatorio = Math.floor(Math.random() * 4);
array.splice(aleatorio, 0, right);
  return array;
}

function createTemplate(question, arrAns, correct, id){
  let result = `
  <div class="olympicQuestion"> 
    <h3 class="question">${question}</h3>
    <button data-id="" class="btnList btnletterA" type="submit">${arrAns[0]}</button>
    <button class="btnList btnletterB" type="submit">${arrAns[1]}</button>
    <button class="btnList btnletterC" type="submit">${arrAns[2]}</button>
    <button class="btnList btnletterD" type="submit">${arrAns[3]}</button>
  </div>`
  $("#results").append(result);
  events(correct);
}

function events(correct){
$(`.btnletterA[data-id=${id}]`).on("click", () => {confirmAlternative(correct)});
// $(".btnletterB").on("click", () => {confirmAlternative(correct)});
// $(".btnletterC").on("click", () => {confirmAlternative(correct)});
// $(".btnletterD").on("click", () => {confirmAlternative(correct)});
}

function confirmAlternative(answer){
  console.log("OIOI");
  // console.log($(this))
  // if($(this) === answer){
  //   $(this).attr("class","green");
  //   counter();
  // }else{
  //   $(this).attr("class","red");
  // }
}

function counter(){

}