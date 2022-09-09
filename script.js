

var textInput = document.querySelector("input");
var resultado = document.querySelector("#resultado");

function criptografar(){

    var texto = textInput.value;
  
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
    
    document.getElementById('resultado').innerHTML = '<textarea readonly rows="14" id="input-texto">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
  }

  function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('resultado').innerHTML = '<textarea readonly rows="14" id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {

    var textoCop = document.getElementById("input-texto");
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 
