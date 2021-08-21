var products_array = []; //el array que contendrá los datos

function showProducts(array_to){
    //la función que procesará los datos de un array ingresado (en este caso será products_array, ingresado
    //en la función de abajo del todo perteneciente a getJSONData)
    var htmlContentToAppend = ""; 
    for(let i = 0; i < array_to.length; i++){
        let pro = array_to[i];

        htmlContentToAppend += `<li>` + pro.name + " | " + pro.description + " | " + pro.cost + " " + pro.currency + `</li>` + `<hr>`;
        //a htmlContentToAppend le voy "sumando"(agregando) la lista con <li> y las características a través de los nodos

        document.getElementById("yes").innerHTML = htmlContentToAppend; 
        //agrego al div con id "yes" la lista contenida en htmlContentToAppend
    };
};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    //ingresamos la const que contiene el enlace al JSON, en este caso PRODUCTS_URL, ubicada en init.js
    getJSONData(PRODUCTS_URL).then(function(check){
        console.log("Check status: " + check.status); //registra en la consola el estado de la petición, si hubo un error o funcionó
        if (check.status === 'ok'){
            products_array = check.data;
            showProducts(products_array);
            //si todo sale bien, muestra en pantalla el array, pero como? Primero se asigna a products_array la data del JSON asociado
            //y luego se ejecuta showProducts introduciendo products_array como valor a analizar por la función
        };
    });
});