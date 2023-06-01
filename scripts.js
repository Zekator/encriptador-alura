/*Aca va la logica del Encriptador*/

function encrypt() {
    
    var text = document.getElementById("text-box").value.toLowerCase();
    // Reemplazar 'e' por 'enter'
    var text = text.replace(/e/igm, 'enter');
    // Reemplazar 'o' por 'ober'
    var text = text.replace(/o/igm, 'ober');
    // Reemplazar 'i' por 'imes'
    var text = text.replace(/i/igm, 'imes');
    // Reemplazar 'a' por 'ai'
    var text = text.replace(/a/igm, 'ai');  
    // Reemplazar 'u' por 'ufat'
    var text = text.replace(/u/igm, 'ufat');
    

    document.getElementById("contenedor-munieco").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("areaTexto").innerHTML = text;
    document.getElementById("btn-copiar").style.display = "show";

}


function decrypt(){
    
text = document.getElementById("text-box").value.toLowerCase();
    
    // Reemplazar 'a' por 'ai'
    text = text.replace(/a/g, 'ai');
    // Reemplazar 'e' por 'enter'
    text = text.replace(/e/g, 'enter');
    // Reemplazar 'i' por 'imes'
    text = text.replace(/i/g, 'imes');
    // Reemplazar 'o' por 'ober'
    text = text.replace(/o/g, 'ober');
    // Reemplazar 'u' por 'ufat'
    text = text.replace(/u/g, 'ufat');

    document.getElementById("contenedor-munieco").style.display = "none";
    document.getElementById("contenedor-parrafo").style.display = "none";
    document.getElementById("areaTexto").innerHTML = "text";
    document.getElementById("contenedor-copiar").style.display = "show";
    document.getElementById("contenedor-copiar").style.display = "inherit";

}