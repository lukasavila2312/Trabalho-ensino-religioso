let clicado1 = 1;
let clicado2 = false;
let clicado3 = false;
let clicado4 = false;
let clicado5 = false;

function abrir1(){
  if(clicado1 = 1){
    clicado1 = 2;
    document.getElementById("R1").innerText="Bolas";
    return;
  }
  else if(clicado1 = 2){
    clicado1 = 1;
    document.getElementById("R1").innerText= ""
  }
}