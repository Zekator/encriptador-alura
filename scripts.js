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
    document.getElementById("btn-copiar").style.visibility = "visible";
    document.getElementById("text-box").value = "";

}


function decrypt(){
    
    text = document.getElementById("text-box").value.toLowerCase();
        
    var text = text.replace(/enter/igm, 'e');
    var text = text.replace(/ober/igm, 'o');
    var text = text.replace(/imes/igm, 'i');
    var text = text.replace(/ai/igm, 'a');  
    var text = text.replace(/ufat/igm, 'u');


    document.getElementById("contenedor-munieco").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("areaTexto").innerHTML = text;
    document.getElementById("btn-copiar").style.visibility = "visible";
    document.getElementById("text-box").value = "";
}

function copy(){

    var copyText = document.getElementById("areaTexto").value;
    navigator.clipboard.writeText(copyText);
    alert("Texto copiado");
    
}
