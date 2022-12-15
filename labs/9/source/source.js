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
  var rolled2;
  var rolled1;
  currentMove++;
  move.innerHTML = 'Спроба ' + currentMove + ' з 3';
  do{
  rolled1 = Math.round(Math.random()*8);
  var rolled11 = Math.round(Math.random()*3+1);
  rolled2 = Math.round(Math.random()*8);
  var rolled22 = Math.round(Math.random()*3+1);
  } while(rolled1==rolled2&&rolled11==rolled22)
  roll1.setAttribute('src','images/' + cards[rolled1] + '_' + rolled11 + '.png');
  roll2.setAttribute('src','images/' + cards[rolled2] +'_' + rolled22 + '.png');
  if(currentMove == 1){
    score1.innerHTML = scoreValue(rolled1);
    score2.innerHTML = scoreValue(rolled2);
  }else{
    score1.innerHTML = parseInt(score1.innerHTML)+ scoreValue(rolled1);
    score2.innerHTML = parseInt(score2.innerHTML)+ scoreValue(rolled2);
  }
  roll1.setAttribute('src','images/' + cards[rolled1] + '_' + rolled11 + '.png');
  roll2.setAttribute('src','images/' + cards[rolled2] +'_' + rolled22 + '.png');
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
  setTimeout(checkForWin, 99);
}
function scoreValue(roll){
  if(roll<5)return roll+6; 
  if(roll<8)return roll-5+2
  return 11;
}

