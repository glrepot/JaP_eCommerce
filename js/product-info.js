var comments_array = []; //array que contendrá los comentarios
var products_array = []; //array que contendrá los productos


function showProduct(array_to){
	var div_del_html = document.getElementById("prod_div");
	
	div_del_html.innerHTML = array_to.name + `<br>` + array_to.description + `<br>` + array_to.cost +
		array_to.soldCount + `<br>` + array_to.category + `<br>`;
	
	var imgsToAppend = "";
	for (let i = 0; i < array_to.length; i++){
		let pro = array_to[i];
		
		imgsToAppend = `<br>` + pro.images;
		
		div_del_html.innerHTML = imgsToAppend;
	};
};


function showComms(array_to){
    var htmlContentToAppend = ""; 
    for(let i = 0; i < array_to.length; i++){
        let com = array_to[i];

        htmlContentToAppend += `<p>` + com.user + `<p>`;

        document.getElementById("com_div").innerHTML = htmlContentToAppend; 
    };
};



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
	getJSONData(PRODUCT_INFO_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            products_array = check.data;
            showProduct(products_array);
        };
    });
	
	
	getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            comments_array = check.data;
            showComms(comments_array);
        };
    });
});