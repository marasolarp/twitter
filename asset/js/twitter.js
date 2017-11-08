
    

var twitter= function(){
   
    if (document.getElementById('comment').value.length == 0 || document.getElementById('comment').value.length>=140 || document.getElementById('comment').value==" ") {
        document.getElementById('boton').setAttribute('disabled');// el disabled se deja como atributo para desabilitarf el boton que por defecto es verdadero(true)

    }else{
    //crear una variable de los elementos a trabajar
        var comentario = document.getElementById('comment'); //variable del textarea
        var contenedor = document.getElementById('contenedor'); //variable del contenedor
        /*var button = document.getElementById('boton');  // llamando el boton 
        var parrafo = document.getElementById('contador');//variable del contador*/
         var text = comentario.value;
        var nuevoTweets = document.createElement('div'); //creando un contenedor para lo q viene luego, en este caso un div
        var nuevoParrafo = document.createElement('p'); //creando parrafo
        var nodoText = document.createTextNode(text);// le estamos diciendo al comentario que es un nodo de texto.
        nuevoParrafo.appendChild(nodoText);//dijimos que p es padre de este nodo de texto.

        nuevoTweets.appendChild(nuevoParrafo);
        contenedor.appendChild(nuevoTweets);   
    }
}
boton.addEventListener('click',twitter);// creee mi evento click

function count(obj){
    var element = document.getElementById('contador');
    element.innerHTML = 140 -obj.value.length;//innerHtml?
    document.getElementById('comment').size = document.getElementById('comment').value.length;
//un if para cambiar color segun caracteres
    if(document.getElementById('comment').value.length >=120 ){
        element.style.color = 'green';
    }if(document.getElementById('comment').value.length >=130){
        element.style.color = 'red';
    }
};
//funcion para auto resize textarea
var textarea = document.getElementById("comment");
var limiteAltura = 200; /* Maximum height: 200px */
textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
