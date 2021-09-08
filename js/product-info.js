var comments_array = []; //array que contendrá los comentarios
var products_array = []; //array que contendrá los productos


function showProduct(array_to){
	document.getElementById("prod_div").innerHTML = array_to.name + `<br>` + array_to.description + `<br>` + array_to.cost +
		array_to.soldCount + `<br>` + array_to.category + `<br>`;
};


function showImgs(array_to){
	var imgsToAppend = "";
	for (i = 0; i < array_to.length; i++){
		let img = array_to[i];
		
		imgsToAppend += `<img src="` + img + `">` + `<br>`;
		
		document.getElementById("img_div").innerHTML = imgsToAppend;
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
			showImgs(products_array.images);
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