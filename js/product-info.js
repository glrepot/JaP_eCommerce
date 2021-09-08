var comments_array = []; //array que contendrá los comentarios
var products_array = []; //array que contendrá los productos

function showProductsPro(array_to){
    var htmlContentToAppend = ""; 
    for(let i = 0; i < array_to.length; i++){
        let pro = array_to[i];

        htmlContentToAppend += `<p>` + pro.user + `<p>`;

        document.getElementById("prod_div").innerHTML = htmlContentToAppend; 
    };
};

/*
function showProductsCom(array_to){
    var htmlContentToAppend = ""; 
    for(let i = 0; i < array_to.length; i++){
        let com = array_to[i];

        htmlContentToAppend += `<li>`

        document.getElementById("yes").innerHTML = htmlContentToAppend; 
    };
};
*/


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
	getJSONData(PRODUCT_INFO_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            products_array = check.data;
            showProductsPro(products_array);
        };
    });
	
	/*
	getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            comments_array = check.data;
            showProductsCom(comments_array);
        };
    });*/
});