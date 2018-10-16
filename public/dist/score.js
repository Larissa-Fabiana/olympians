
function score(){
  let corrects= localStorage.getItem("score");
  if(corrects === null){
    corrects = 0;
  }
  $(".main").html(`
  <div class="main-index container-score">
    <h1>Você conseguiu:</h1>
    <h2>${corrects} pontos!!!</h2>
  </div>`);
}