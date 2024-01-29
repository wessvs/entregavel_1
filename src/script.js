///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!


function Calculadora(n1, n2, op) {
  let resultado

  n1 = Number(n1)
  n2 = Number(n2)

  if(op == "+")
  {
    resultado = n1 + n2;
  } else if(op == "-")
  {
    resultado = n1 - n2;
  } else if(op == "*") 
  {
    resultado = n1 * n2
  } else if(op == "/")
  {
    resultado = n1/n2
  } else{
    let total = n1
    for(let i=1; i<=n2;i++) {
      total *= n1
    }
    resultado = total
  }

  if (resultado === undefined || resultado > 1000000){
    return "ERRO"
  } else {
    return resultado
  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}