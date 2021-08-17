//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function rojo(input_id, input_error){
    var id_ingresada = document.getElementById(input_id);
    var error_ingresado = document.getElementById(input_error);
    if(id_ingresada.value == ''){
        error_ingresado.innerHTML = "Complete el campo por favor";
        console.log("no hay datos ingresados");
    } else if(id_ingresada.value.length < 5) {
        error_ingresado.innerHTML = "Ingrese mínimo 5 carácteres";
        console.log("datos muy cortos");
    } else {
        error_ingresado.innerHTML = "";
        console.log("hay datos ingresados");
    };
};

function ingresar(){
    var idcontra = document.getElementById('password');
    var idemail = document.getElementById('email');
    if((idcontra.value.length && idemail.value.length) >= 5) {
        window.location.href = "https://glrepot.github.io/jap_ecommerce/index.html";
    };
};