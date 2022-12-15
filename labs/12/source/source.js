var currentPosition = 0;
var complited = Array(30);
var correct = 0;
var correctText = $('.text2').get(0);
var uncorrect = 0;
var uncorrectText = $('.text2').get(1);
var word = $('.word').get(0);
var curNum = $('.numOfWord').get(0);
var input = $('.in').get(0);
var cb  =1;
var words = ['saturday',
             'today',
             'yes',
             'three',
             'car',
             'airplane',
             'wheel',
             'here',
             'who',
             'tea',
             'activity',
             'already',
             'annoy',
             'biography',
             'catchy',
             'common',
             'congratulate',
             'drummer',
             'expensive',
             'field',
             'abasement',
             'abhor',
             'abstain',
             'affable',
             'alacrity',
             'bigot',
             'blatant',
             'charisma',
             'comprehensive',
             'creditable'];
var translations = ['субота',
                    'сьогодні',
                    'так',
                    'три',
                    'машина',
                    'самоліт',
                    'колесо',
                    'тут',
                    'хто',
                    'чай',
                    'діяльність',
                    'вже',
                    'дратувати',
                    'біографія',
                    'помітний',
                    'поширений',
                    'привітати',
                    'барабанщик',
                    'дорогий',
                    'поле',
                    'приниження',
                    'ненавидіти',
                    'утриматись',
                    'привітний',
                    'спритність',
                    'фанатик',
                    'вульгарний',
                    'харизма',
                    'всебічний',
                    'похвальний'];
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
    if($('#1').is(':checked')){
      word.innerHTML = words[rand[currentPosition]];
      if(complited[currentPosition] != undefined)
        input.value = complited[currentPosition];
    }
    else if($('#2').is(':checked')){
      console.log(123);
      word.innerHTML = words[rand[currentPosition]+10];
      if(complited[currentPosition+10] != undefined)
        input.value = complited[currentPosition+10];
    }
    else{
      console.log(222);
      word.innerHTML = words[rand[currentPosition]+20];
      if(complited[currentPosition+20] != undefined)
        input.value = complited[currentPosition+20];
    }
    curNum.innerHTML = currentPosition+1 +'/10';
}

function right() {
  checkAnswer();
  if(currentPosition == 9){
    currentPosition = 0
  }
  else
    currentPosition++;
    if($('#1').is(':checked')){
      word.innerHTML = words[rand[currentPosition]];
      if(complited[currentPosition] != undefined)
        input.value = complited[currentPosition];
    }
    else if($('#2').is(':checked')){
      word.innerHTML = words[rand[currentPosition]+10];
      if(complited[currentPosition+10] != undefined)
        input.value = complited[currentPosition+10];
    }
    else{
      word.innerHTML = words[rand[currentPosition]+20];
      if(complited[currentPosition+20] != undefined)
        input.value = complited[currentPosition+20];
    }
  curNum.innerHTML = currentPosition+1 +'/10';
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

  if($('#1').is(':checked')){
    complited[currentPosition] = input.value;
  }
  else if($('#2').is(':checked')){
    complited[currentPosition+10] = input.value;
  }
  else{
    complited[currentPosition+20] = input.value;
  }
  input.value = '';
  setPoints();
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
$('input[name="difficulty"]').click(function(){
  if($('#1').is(':checked')){
    word.innerHTML = words[rand[currentPosition]];
    if(!(input.value == '' || input.value == undefined)){
      if(cb==1)
        complited[currentPosition] = input.value;
      else if(cb==2)
        complited[currentPosition+10] = input.value;
      else
        complited[currentPosition+20] = input.value;
    }
    if(complited[currentPosition] != undefined)
      input.value = complited[currentPosition];
    else
      input.value = '';
    cb=1;
    setPoints();
  }
  else if($('#2').is(':checked')){
    word.innerHTML = words[rand[currentPosition]+10];
    if(!(input.value === '' || input.value == undefined)){
      if(cb==1)
        complited[currentPosition] = input.value;
      else if(cb==2)
        complited[currentPosition+10] = input.value;
      else
        complited[currentPosition+20] = input.value;
    }
    if(complited[currentPosition+10] != undefined)
      input.value = complited[currentPosition+10];
    else
      input.value = '';
    cb=2;
    setPoints()
  }
  else{
    word.innerHTML = words[rand[currentPosition]+20];
    if(!(input.value === '' || input.value == undefined)){
      if(cb==1)
        complited[currentPosition] = input.value;
      else if(cb==2)
        complited[currentPosition+10] = input.value;
      else
        complited[currentPosition+20] = input.value;
    }
    if(complited[currentPosition+20] != undefined)
      input.value = complited[currentPosition+20];
    else
      input.value = '';
    cb=3;
    setPoints();
  }
});
function setPoints(){
  correct = 0;
  uncorrect = 0;
  for(var i =0;i<10;i++){
    if(cb==1){
      if(complited[i]==undefined||complited[i]=='')
        continue;
      if(complited[i] === translations[rand[i]])
        correct++;
      else
        uncorrect++;
      }
    else if(cb==2){
      if(complited[i+10]==undefined||complited[i+10]=='')
        continue;
      if(complited[i+10] === translations[rand[i]+10])
        correct++;
      else
        uncorrect++;
    }
    else{
      if(complited[i+20]==undefined||complited[i+20]=='')
        continue;
      if(complited[i+20] === translations[rand[i]+20])
        correct++;
      else
        uncorrect++;
    }
  }
  correctText.innerHTML = correct;
  uncorrectText.innerHTML = uncorrect;  
}