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
  let amount = data.results;
  for(a of amount){
    let question = a.question;
    let answerCorrect = a.correct_answer;
    let answerIncorrect = a.incorrect_answers;
    createTemplate(question, answerCorrect, answerIncorrect);
  }
}

function createTemplate(question, right, wrong){
  let result = document.getElementsByClassName("results")[0];
  result.innerHTML = `
  <div class="area-noticia"> ${docs.map(doc => ` <div class="noticia">
      <h3> ${doc.headline.main}</h3>
      <p> ${doc.snippet}</p>
      <a href="${doc.web_url}">Link para original </a>
    </div>`).join("")}
  </div>`
}