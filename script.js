const input = document.querySelector('.input');
const btnEncriptar = document.querySelector('.button-encriptar');
const btnDesencriptar = document.querySelector('.button-desencriptar');
const texto = document.querySelector('.texto');
const btnCopiar = document.getElementById('button-copiar');
btnCopiar.style.display = "none";
function quitarElementos() {
    document.getElementById("muneco").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    btnCopiar.style.display = "block";
}
function encriptar() {
    let palabra = input.value;
    if (palabra !== '') {
        let palabra_modificada = palabra.replace(/a|e|i|o|u/g, function(letra) {
            if (letra === 'a') {
                return 'ai';
            } else if (letra === 'e') {
                return 'enter';
            }else if (letra === 'i') {
                return 'imes';
            }else if (letra === 'o') {
                return 'ober';
            }else if (letra === 'u') {
                return 'ufat';
            }
        });
        quitarElementos();
        texto.textContent = palabra_modificada
    } else {
        alert('Oops!! Por favor ingrese el texto para encriptar')
    }
    return (texto);
}
function desencriptar() {
    let palabra = input.value;
    if (palabra !== '') {
        let palabra_modificada = palabra.replace(/ai|enter|imes|ober|ufat/g, function(letra) {
            if (letra === 'ai') {
                return 'a';
            } else if (letra === 'enter') {
                return 'e';
            }else if (letra === 'imes') {
                return 'i';
            }else if (letra === 'ober') {
                return 'o';
            }else if (letra === 'ufat') {
                return 'u';
            }
        });
        quitarElementos();
        texto.textContent = palabra_modificada
    } else {
        alert('Oops!! Por favor ingrese el texto para desencriptar')
    } 
    return (texto);
}
function copiar() {
    navigator.clipboard.writeText(texto.textContent)
      .then(() => {
        alert("El texto se ha copiado al portapapeles.");
      }).catch(err => {
        alert("No se pudo copiar el texto: " + err);
      });
};
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;