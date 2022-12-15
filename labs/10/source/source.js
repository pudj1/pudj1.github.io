var name1 = document.getElementsByClassName('name')[0];
var move = document.getElementsByClassName('currentTry')[0];
var currentMove = 0;
var pictures = ['default.jpg',
                'blueberry.jpg',
                'apple.jpg',
                'lemon.jpg',
                'orange.jpg',
                'qiwi.jpg']
var icons = [0,0,0,
             0,0,0,
             0,0,0]
function selectName(){
  do{
  name1.innerHTML = prompt();
  } while(name1.innerHTML === '')
}
function func(){
  var roll;
  currentMove++;
  move.innerHTML = 'Спроба ' + currentMove + ' з 3';
  do{
  for(var i=0;i<9;i++){
    roll = Math.round(Math.random()*4+1);
    icons[i] = roll;
    document.getElementById('icon'+i).setAttribute('src','images/'+pictures[roll])
  }
  } while(icons[0]==icons[1]||icons[0]==icons[2]||
          icons[1]==icons[2]||icons[3]==icons[4]||
          icons[3]==icons[5]||icons[4]==icons[5]||
          icons[6]==icons[7]||icons[6]==icons[8]||
          icons[7]==icons[8])
  function checkForWin(){
    
      if(icons[0]==icons[3]&&icons[0]==icons[6]||
         icons[1]==icons[4]&&icons[1]==icons[7]||
         icons[2]==icons[5]&&icons[2]==icons[8])
        {
          alert(name1.innerHTML+' переміг!')
          currentMove = 0;
          for(var i=0;i<9;i++){
            icons[i] = 0;
            document.getElementById('icon'+i).setAttribute('src','images/'+pictures[0])
          }
          move.innerHTML = 'Спроба ' + currentMove + ' з 3';
          return;
        }
    
    if (currentMove == 3){
      alert(name1.innerHTML+' програв!')
      currentMove = 0;
      for(var i=0;i<9;i++){
        icons[i] = 0;
        document.getElementById('icon'+i).setAttribute('src','images/'+pictures[0])
      }
      move.innerHTML = 'Спроба ' + currentMove + ' з 3';
    }
  }
  setTimeout(checkForWin, 0);
}
