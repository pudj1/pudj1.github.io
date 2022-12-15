var currentPosition = 0;
var complited = Array(10);
var correct = 0;
var correctText = $('.text2').get(0);
var uncorrect = 0;
var uncorrectText = $('.text2').get(1);
var word = $('.word').get(0);
var curNum = $('.numOfWord').get(0);
var input = $('.in').get(0);
var words = ['saturday',
             'today',
             'yes',
             'three',
             'car',
             'airplane',
             'wheel',
             'here',
             'who',
             'tea'];
var translations = ['субота',
                    'сьогодні',
                    'так',
                    'три',
                    'машина',
                    'самоліт',
                    'колесо',
                    'тут',
                    'хто',
                    'чай'];
var rand = new Array(10);
for(var i =0;i<10;i++){
  rand[i] = i; 
}
rand = shuffle(rand);
word.innerHTML = words[rand[currentPosition]];
function left() {
  checkAnswer();
  if(currentPosition == 0)
    currentPosition = 9
  else
    currentPosition--;
  word.innerHTML = words[rand[currentPosition]];
  curNum.innerHTML = currentPosition+1 +'/10';
  
  if(complited[currentPosition] != undefined)
    input.value = complited[currentPosition];
}
function right() {
  checkAnswer();
  if(currentPosition == 9){
    currentPosition = 0
  }
  else
    currentPosition++;
  word.innerHTML = words[rand[currentPosition]];
  curNum.innerHTML = currentPosition+1 +'/10';
  
  if(complited[currentPosition] != undefined)
    input.value = complited[currentPosition];
}
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function checkAnswer(){
    if(input.value==''||input.value==undefined){
      console.log(123);
      return;
    }
    correct = 0;
    uncorrect = 0;
    complited[currentPosition] = input.value;
    input.value = '';
    for(var i =0;i<10;i++){
      if(complited[i]==undefined)
        continue;
      if(complited[i] === translations[rand[i]])
        correct++;
      else
        uncorrect++;
    }
    correctText.innerHTML = correct;
    uncorrectText.innerHTML = uncorrect;
  }
  $(document).ready(function($) {
    $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
    });        
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut();
      }
    });
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
      }
    });	
  });
  function func(){
    var string = 'Ти відповів правильно на ' + correctText.innerHTML + 'з 10 питань це ';
    if(correctText.innerHTML > 8) 
      string += "високий рівень. Молодец!"
    else if(correctText.innerHTML > 5)
      string += "середній рівень. Молодец!"
    else
      string += "низький рівень.";
    $('.a').get(0).innerHTML = string;
    $('.popup-fade').show();

  }