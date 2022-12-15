var roll1 = document.getElementById('roll1').children[0];
var roll2 = document.getElementById('roll2').children[0];
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

function selectName(){
  let name1;
  do{
  name1 = document.getElementsByClassName('name')[0];
  name1.innerHTML = prompt();
  } while(name1.innerHTML === '')
}
function func(){
  var rolled2;
  var rolled1;
  do{
  rolled1 = Math.round(Math.random()*8+1);
  rolled2 = Math.round(Math.random()*8+1);
  } while(rolled1==rolled2)
  roll1.innerHTML = rolled1;
  roll2.innerHTML = rolled2;
  if(rolled1==rolled2)
    return;
  else if(rolled1>rolled2)
    score1.innerHTML = +score1.innerHTML + 1;
  else
    score2.innerHTML = +score2.innerHTML + 1;
    function checkForWin(){
      if(score1.innerHTML == 3){
        alert('Переміг гравец!');
        roll1.innerHTML = 0;
        roll2.innerHTML = 0;
        score1.innerHTML = 0;
        score2.innerHTML = 0;
      }
      if(score2.innerHTML == 3){
        alert("Переміг комп'ютер!");
        roll1.innerHTML = 0;
        roll2.innerHTML = 0;
        score1.innerHTML = 0;
        score2.innerHTML = 0;
      }
    }
    setTimeout(checkForWin, 0);

}
