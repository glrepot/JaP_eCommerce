var comments_array = []; //array que contendrá los comentarios
var products_array = []; //array que contendrá los productos


function showProduct(array_to){
	document.getElementById("prod_div").innerHTML = 
	`<h2>` +array_to.category + " / " + array_to.name + `</h2> <hr>` + 
	
	`<p>` + array_to.description  + `</p>` + 
	
	`<b>` + "Costo: " + `</b>` + array_to.cost + " " + "USD" +`<br>`+ 
	
	`<b>` + "Cantidad vendidos: " + `</b>` + array_to.soldCount + `<br>`;
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

        htmlContentToAppend += `
		<div class="card" style="width: 18rem;">
		<div class="card-body">
		<h5 class="card-title">` + com.user + `</h5>
		<h6 class="card-subtitle mb-2 text-muted">` + com.score + `</h6>
		<p class="card-text">` + com.description + `</p>
		<p class="card-text">` + com.dateTime + `</p>
		</div>
		</div>`;

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