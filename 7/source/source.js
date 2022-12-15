document.body.onload = addHtml;
var my_div = newDiv = null;
var arr = ["Yes definitely.",
           "It is certain.",
           "It is decidedly so.",
           "Without a doubt.",
           "You may rely on it.",
           "As I see it, yes.",
           "Most likely.",
           "Outlook good.",
           "Yes.",
           "Signs point to yes.",
           "Reply hazy, try again.",
           "Ask again later.",
           "Better not tell you now.",
           "Cannot predict now.",
           "Concentrate and ask again.",
           "Don't count on it.",
           "My reply is no.",
           "My sources say no.",
           "Outlook not so good.",
           "Very doubtful.",];
function getRandom() {
  return Math.floor(Math.random() * 19);
}
function addHtml() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class","main")
  newDiv.innerHTML = '<div class = "d1"><input id="t" type="text"></div><div class = "d2"><input type="image" id="imgButton" src="images/button.jpg" onclick="func()" alt="Кнопка"><div id="d3" onclick="func()"></div></div>';
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}

function func(){
  var text = document.getElementById("d3");
  var question = document.getElementById("t");
  if(question.value.split(' ').join() !=="")
    text.innerHTML = arr[getRandom()];
  
}

