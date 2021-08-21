//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    var boton_free_mostrador = document.getElementById("boton_free");
    boton_free_mostrador.style.display = "none";
});

function rojo(input_id, input_error){
    var id_ingresada = document.getElementById(input_id);
    var error_ingresado = document.getElementById(input_error);
    if(id_ingresada.value.length < 5) {
        error_ingresado.innerHTML = "Ingrese mínimo 5 carácteres";
        id_ingresada.classList.add("error");
        console.log("no hay datos o son muy pocos");
    } else {
        error_ingresado.innerHTML = "";
        id_ingresada.classList.remove("error");
        console.log("hay datos ingresados");
    };
};

function ingresar(){
    var idcontra = document.getElementById('password');
    var idemail = document.getElementById('email');
    sessionStorage.setItem("value", 1);
    if((idcontra.value.length && idemail.value.length) >= 5) {
        window.location.href = "https://glrepot.github.io/jap_ecommerce/index.html";
    };
};

function redirigir(){
    sessionStorage.setItem("value", 1);
    window.location.href = "https://glrepot.github.io/jap_ecommerce/index.html";
}