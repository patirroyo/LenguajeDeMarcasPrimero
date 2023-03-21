function negrita() {
    document.execCommand('bold', false, null); //primero el comando, luego si es que tiene argumentos y luego el valor del argumento
    //false es para que no se abra una ventana emergente
    //null es para que no se le pase un valor
}
function cursiva() {
    document.execCommand('italic', false, null);
}
function subrayado() {
    document.execCommand('underline', false, null);
}
function alini() {
    document.execCommand('justifyLeft', false, null);
}
function alinc() {
    document.execCommand('justifyCenter', false, null);
}
function alind() {
    document.execCommand('justifyRight', false, null);
}
function alinf() {
    document.execCommand('justifyFull', false, null);
}
function listanordenada() {
    document.execCommand('insertUnorderedList', false, null);
}
function listaordenada() {
    document.execCommand('insertOrderedList', false, null);
}
function subindice() {
    document.execCommand('subscript', false, null);
}
function superindice() {
    document.execCommand('superscript', false, null);
}
function fontcolor() {
    var color = window.prompt("Introduce el color de la fuente");//prompt es una ventana emergente que pide un valor al usuario y lo almacena en la variable color.
    document.execCommand('foreColor', false, color);//foreColor es el comando para cambiar el color de fuente de un texto seleccionado en el editor de texto. color es el valor que se le pasa al comando.
}
function backcolor() {
    var color = window.prompt("Introduce el color del fondo");//prompt es una ventana emergente que pide un valor al usuario y lo almacena en la variable color.
    document.execCommand('backColor', false, color);//backColor es el comando para cambiar el color de fondo de un texto seleccionado en el editor de texto. color es el valor que se le pasa al comando.
}
function imagen() {
    var ruta = window.prompt("Introduce la ruta de la imagen");//prompt es una ventana emergente que pide un valor al usuario y lo almacena en la variable ruta.
    document.execCommand('insertImage', false, ruta);//insertImage es el comando para insertar una imagen en el editor de texto. ruta es el valor que se le pasa al comando.
}
function hipervinculo() {
    var url = window.prompt("Introduce la URL del hipervinculo", 'http://');//prompt es una ventana emergente que pide un valor al usuario y lo almacena en la variable url.
    document.execCommand('createLink', false, url);//createLink es el comando para crear un hipervinculo en el editor de texto. url es el valor que se le pasa al comando.
}
function publicar() {
    var contenido = document.getElementById("contenido").innerHTML;//obtenemos el contenido del div contenido.
    document.getElementById("mensajes").innerHTML = contenido;//lo mostramos en el div mensajes.
}