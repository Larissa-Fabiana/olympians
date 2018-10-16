function bringQuestions(){
  result = 0;
  localStorage.clear();
  $(".main").html("");
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
  data.results.forEach( (element, index) => {
    let answers = arrOfAnswers(element.correct_answer, element.incorrect_answers);
    createTemplate(element.question, answers, element.correct_answer, index);
  });
  buttonAnswers()
}

function arrOfAnswers(right, array){
let aleatorio = Math.floor(Math.random() * 4);
array.splice(aleatorio, 0, right);
  return array;
}

function createTemplate(question, arrAns, correct, index){ /*data-id=""*/
  let result = `
  <div class="olympicQuestion"> 
    <h3 class="question">${question}</h3>
    <button class="btnList" type="submit" data-id="${index}a" >${arrAns[0]}</button>
    <button class="btnList" type="submit" data-id="${index}b">${arrAns[1]}</button>
    <button class="btnList" type="submit" data-id="${index}c">${arrAns[2]}</button>
    <button class="btnList" type="submit" data-id="${index}d">${arrAns[3]}</button>
  </div>`
  $(".main").append(result);

  $(`.btnList[data-id=${index}a]`).on("click", () => {disableOthers(index, correct, ['a', 'b', 'c', 'd'])});
  $(`.btnList[data-id=${index}b]`).on("click", () => {disableOthers(index, correct, ['b', 'a', 'c', 'd'])});
  $(`.btnList[data-id=${index}c]`).on("click", () => {disableOthers(index, correct, ['c', 'a', 'b', 'd'])});
  $(`.btnList[data-id=${index}d]`).on("click", () => {disableOthers(index, correct, ['d', 'a', 'b', 'c'])});
}

function disableOthers(index, correct, arr){
  let alternative = $(`.btnList[data-id=${index}${arr[0]}]`);
  alternative.attr('id', 'purple');
  $(`.btnList[data-id=${index}${arr[1]}]`).attr('disabled', 'disabled');
  $(`.btnList[data-id=${index}${arr[2]}]`).attr('disabled', 'disabled');
  $(`.btnList[data-id=${index}${arr[3]}]`).attr('disabled', 'disabled');
  if(alternative.html() == correct){
    counter(alternative);
  }
}

let result = 0;
function counter(alternative){
  alternative.attr('disabled', 'disabled');
  result +=1;
  localStorage.setItem("score", result);
}

function buttonAnswers(){
  $(".main").append(`<div class="btnAnswers-div"><a class="btn btnAnswers" href="/score">Result</a></div>`);
}