$(document).ready(() => {
page('/', index)
page('/start', show)
page('/score', endgame)
page('*', notfound)
page()
})

function index(){
  firstPage();
}

function show(){
  bringQuestions();
}

function endgame(){
  score();
}

function notfound(){
  pageNotFound();
}