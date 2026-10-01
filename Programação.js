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