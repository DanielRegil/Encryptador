function ID(id){
  return document.getElementById(id);
}

function  getID(id){
  return document.getElementById(id).value;
}

function innerHTML(id,resultado){
  return document.getElementById(id).innerHTML = resultado;
}

function contadorcaracteres(){
  setInterval(function(){
    var c = getID("txtCount");
    innerHTML("count", "Caracteres: " + (c.length) );
    
  },0000);

}



function textTrue(){ 
  var button = ID("buttonCopy") ;
  var imagen = ID("noText");
  var text = ID("text");
  var c = getID('txtCount')
  if ((c<1)) {
    imagen.style.display = "block";
    text.style.display = "none";
    button.style.display = "none";

  } else if ((c=>1)){
    imagen.style.display = "none";
    text.style.display = "block";
    button.style.display = "block";
   
  }
}



function a(){
  var c = newTxt;
  var searchedLetter = /a/g;
  var replacedLetter = "ai";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function e(){
  var c = getID("txtCount"); 
  var searchedLetter = /e/g;
  var replacedLetter = "enter";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function i(){
  var c = newTxt;
  var searchedLetter = /i/g;
  var replacedLetter = "imes";
  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =newText;
}

function o(){
  var c = newTxt; 
  var searchedLetter = /o/g;
  var replacedLetter = "ober";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function u(){
  var c = newTxt;
  var searchedLetter = /u/g;
  var replacedLetter = "ufat";
  var newText = c.replace(searchedLetter, replacedLetter);
  innerHTML("text", "El texto encriptado es:" + (newText));
}

function ai(){
  var c = newTxt;
  var searchedLetter = /ai/g;
  var replacedLetter = "a";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function enter(){
  var c = getID("txtCount"); 
  var searchedLetter = /enter/g;
  var replacedLetter = "e";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function imes(){
  var c = newTxt;
  var searchedLetter = /imes/g;
  var replacedLetter = "i";
  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =newText;
}

function ober(){
  var c = newTxt; 
  var searchedLetter = /ober/g;
  var replacedLetter = "o";

  var newText = c.replace(searchedLetter, replacedLetter);
  return newTxt =(newText);
  
}

function ufat(){
  var c = newTxt;
  var searchedLetter = /ufat/g;
  var replacedLetter = "u";
  var newText = c.replace(searchedLetter, replacedLetter);
  innerHTML("text", "El texto encriptado es:" + (newText));
}

function decrypt(){
  textTrue();
  enter();
  imes();
  ai();
  ober();
  ufat();

}

function encrypt(){
  textTrue();
  e();
  i();
  a();
  o();
  u();

}

function copy(){
  
   var buttonCopy = ID("copy");
   let text = ID("text");
   var inputFake = document.createElement("input");

   inputFake.setAttribute("value", text.innerHTML);
   document.body.appendChild(inputFake);
   inputFake.select();
   document.execCommand("copy");
   document.body.removeChild(inputFake);  
}