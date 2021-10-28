/*
TIENE QUE USAR OBLIGATORIAMENTE UN JSON.STRINGIFY
COMO DICE EN LA LETRA:
Recuerda del uso de los métodos JSON.stringify y JSON.parse para poder almacenar y recuperar los datos almacenados respectivamente.
*/
var nombre, edad, email, telefono
	nombre = document.getElementById('campo_nombre')
	edad = document.getElementById('campo_edad')
	email = document.getElementById('campo_email')
	telefono = document.getElementById('campo_numero')


function modifyData(){
	
};


function saveData(){
	
};


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
	//deshabilitar edicion campos
	nombre.disabled = true;
	edad.disabled = true;
	email.disabled = true;
	telefono.disabled = true;
});