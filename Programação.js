let clicado1 = false;
let clicado2 = false;
let clicado3 = false;
let clicado4 = false;
let clicado5 = false;

function abrir1(){
  if(clicado1 === false){
    clicado1 = true;
    document.getElementById("R1").innerText="Bolas";
    return;
  }
  else{
    clicado1 = false;
    document.getElementById("R1").innerText= ""
  }
}
function abrir2(){
  if(clicado2 === false){
    clicado2 = true;
    document.getElementById("R2").innerText="Bolas";
    return;
  }
  else{
    clicado2 = false;
    document.getElementById("R2").innerText= ""
  }
}
function abrir3(){
  if(clicado3 === false){
    clicado3 = true;
    document.getElementById("R3").innerText="Bolas";
    return;
  }
  else{
    clicado3 = false;
    document.getElementById("R3").innerText= ""
  }
}
function abrir4(){
  if(clicado4 === false){
    clicado4 = true;
    document.getElementById("R4").innerText="Bolas";
    return;
  }
  else{
    clicado4 = false;
    document.getElementById("R4").innerText= ""
  }
}
function abrir5(){
  if(clicado5 === false){
    clicado5 = true;
    document.getElementById("R5").innerText="Bolas";
    return;
  }
  else{
    clicado5 = false;
    document.getElementById("R5").innerText= ""
  }
}