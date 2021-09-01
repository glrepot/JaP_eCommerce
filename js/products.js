//FALTA EL BUSCADOR

var products_array = []; //el array que contendrá los datos obtenidos del json
var cur_array = null; //array "seleccionada" para trabajar

function showProducts(array_to){
    //la función que procesará los datos de un array ingresado (en este caso será products_array)
    var htmlContentToAppend = ""; 
    for(let i = 0; i < array_to.length; i++){
        let pro = array_to[i];

        htmlContentToAppend += `<li>` + pro.name + " | " + pro.description + " | " + pro.cost + " " + pro.currency + `</li>` + `<hr>`;
        //a htmlContentToAppend le voy "sumando"(agregando) la lista con <li> y las características a través de los nodos

        document.getElementById("yes").innerHTML = htmlContentToAppend; 
        //agrego al div con id "yes" la lista contenida en htmlContentToAppend
    };
};


//función encargada de mostrar los productos dentro de un rango establecido
function ranger() {
	var campo_rango1 = document.getElementById("campo_rango1").value;
	var campo_rango2 = document.getElementById("campo_rango2").value;
	var nueva_array = null;
	
	nueva_array = products_array.filter(prod => (prod.cost > campo_rango1) && (prod.cost < campo_rango2));
	cur_array = nueva_array;
	showProducts(nueva_array);
};


//función encargada de ordenar alfabéticamente los productos
function ordenador(order) {
    cur_array.sort(function(a, b){
        var puntoA = a.cost;
        var puntoB = b.cost;
        if (order == "MENOR"){
            //si en order se ingresa MENOR, la lista se ordena del mneor costo al mayor
            if (puntoA < puntoB) {
                return -1;
            }
            if (puntoA > puntoB) {
                return 1;
            }
              return 0;
        } else {
            //sino se ingresa MENOR, se ordena del mayor costo al menor
            if (puntoA < puntoB) {
                return 1;
            }
            if (puntoA > puntoB) {
                return -1;
            }
              return 0;
        };
    });
    showProducts(cur_array);
};

function ordenador_relevancia(){
	var relevancia_array = null
	relevancia_array = cur_array.sort(function(a, b){
		var pa = a.soldCount;
		var pb = b.soldCount;
		
        if (pa < pb) {
			return -1;
        }
        if (pa > pb) {
			return 1;
        }
        return 0;
	});
	cur_array = relevancia_array;
	showProducts(relevancia_array); 
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
			cur_array = products_array;
            showProducts(products_array);
            //si todo sale bien, muestra en pantalla el array, pero como? Primero se asigna a products_array la data del JSON asociado
            //y luego se ejecuta showProducts introduciendo products_array como valor a analizar por la función
        };
    });
});