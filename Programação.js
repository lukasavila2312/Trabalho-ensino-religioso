let clicado1 = false;
let clicado2 = false;
let clicado3 = false;
let clicado4 = false;
let clicado5 = false;

function abrir1(){
  if(clicado1 === false){
    clicado1 = true;
    document.getElementById("R1").innerText="Diferentes tradições religiosas e culturais compreendem a relação entre seres humanos e natureza de maneiras variadas. Algumas veem a natureza como uma criação sagrada que deve ser cuidada; outras consideram os elementos naturais como seres ou forças espirituais com os quais os humanos mantêm uma relação de respeito e equilíbrio. Em muitas culturas indígenas, por exemplo, a natureza é entendida como parte de uma comunidade da qual os seres humanos também fazem parte. Já em tradições como o budismo, destaca-se a interdependência entre todos os seres. Apesar das diferenças, muitas dessas tradições valorizam respeito, cuidado, equilíbrio e responsabilidade na relação com o meio ambiente.";
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
    document.getElementById("R2").innerText="A preservação ambiental pode ser considerada uma questão ética porque envolve nossas responsabilidades com a natureza, com outras pessoas e com as futuras gerações. Nossas ações podem causar impactos positivos ou negativos no meio ambiente, por isso devemos refletir sobre como utilizar os recursos naturais de forma responsável e evitar danos que prejudiquem outros seres vivos e a sociedade.";
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
    document.getElementById("R3").innerText="Sustentabilidade significa usar os recursos da natureza de um jeito mais consciente, sem gastar tudo agora e acabar prejudicando as pessoas e o meio ambiente no futuro. É tentar equilibrar o que a gente precisa hoje com o que as próximas gerações também vão precisar.";
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
    document.getElementById("R4").innerText="Dois valores são respeito e responsabilidade, pois ambos incentivam o cuidado com a natureza e com os recursos que usamos.";
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
    document.getElementById("R5").innerText="Nesse caso, a comunidade poderia se unir para preservar o rio, evitando jogar lixo e denunciando a poluição. Também poderia realizar campanhas de conscientização, pois além de ser importante cultural ou religiosamente, o rio faz parte do meio ambiente e é importante para a vida das pessoas e dos animais."
    return;
  }
  else{
    clicado5 = false;
    document.getElementById("R5").innerText= ""
  }
}