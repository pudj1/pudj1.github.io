var roll1 = document.getElementById('roll1').children[0];
var roll2 = document.getElementById('roll2').children[0];
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var move = document.getElementsByClassName('currentTry')[0];
var currentMove = 0;
var cards = ['six',
             'seven',
             'eight',
             'nine',
             'ten',
             'jack',
             'queen',
             'king',
             'ace'
]
function selectName(){
  let name1;
  do{
  name1 = document.getElementsByClassName('name')[0];
  name1.innerHTML = prompt();
  } while(name1.innerHTML === '')
}
function func(){
  function checkForWin(){
    if (currentMove == 3){
      if(score1.innerHTML>score2.innerHTML){
        alert('Переміг гравец!');
        roll1.setAttribute('src','images/default.jpg');
        roll2.setAttribute('src','images/default.jpg');
        currentMove = 0;
        move.innerHTML = 'Спроба ' + currentMove + ' з 3';
        score1.innerHTML = 0;
        score2.innerHTML = 0;
      }
      else{
        alert("Переміг комп'ютер!");
        roll1.setAttribute('src','images/default.jpg');
        roll2.setAttribute('src','images/default.jpg');
        currentMove = 0;
        move.innerHTML = 'Спроба ' + currentMove + ' з 3';
        score1.innerHTML = 0;
        score2.innerHTML = 0;
      }
    }
  }
  setTimeout(checkForWin, 300);
  var rolled2;
  var rolled1;
  currentMove++;
  move.innerHTML = 'Спроба ' + currentMove + ' з 3';
}
function scoreValue(roll){
  if(roll<5)return roll+6; 
  if(roll<8)return roll-5+2
  return 11;
}

