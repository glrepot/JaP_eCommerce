var comments_array = []; //array que contendrá los comentarios
var products_array = []; //array que contendrá los productos
var related_array = []; //contiene los productos relacionados


//función encargada de procesar los datos del producto y mostrarlos en html
function showProduct(array_to){
	document.getElementById("prod_div").innerHTML = 
	`<h2>` +array_to.category + " / " + array_to.name + `</h2> <hr>` + 
	
	`<p>` + array_to.description  + `</p>` + 
	
	`<b>` + "Costo: " + `</b>` + array_to.cost + " " + "USD" +`<br>`+ 
	
	`<b>` + "Cantidad vendidos: " + `</b>` + array_to.soldCount + `<br>`;
};


//función encargada de procesar las imagenes del producto y mostrarlas en html
function showImgs(array_to){
	var imgsToAppend = "";
	for (i = 0; i < array_to.length; i++){
		let img = array_to[i];
		
		imgsToAppend += `
        <div class="myImgSlides center">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + img + `" alt="">
            </div>
        </div>
        `
		
		document.getElementById("img_div").innerHTML = imgsToAppend;
	};
};


//función encargada de procesar los comentarios y mostrarlos
function showComms(array_to){
    var htmlContentToAppend = "";
    for(let i = 0; i < array_to.length; i++){
        let com = array_to[i];

        htmlContentToAppend += `
		<div class="mySlides card center" style="width: 18rem;">
		<div class="card-body">
		<h5 class="card-title">` + com.user + `</h5>`
		+ (`<span class="fa fa-star checked"></span>`).repeat(com.score) +
		`<p class="card-text">` + com.description + `</p>
		<p class="card-text">` + com.dateTime + `</p>
		</div>
		</div>`;
		

        document.getElementById("com_div").innerHTML = htmlContentToAppend;
    };
};


//función encargada de publicar el comentario
function pubComm() {
	var texto = document.getElementById("user_description").value;
	var user = sessionStorage.getItem("usuario");
	var score = document.getElementById("puntos").value;
	var time = new Date();
	var day = time.getDate();
	var month = time.getMonth() + 1;
	var year = time.getFullYear();
	var hour = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	
	//publica el comentario
	document.getElementById("recent_com_si").innerHTML = `
		<div class="card center" style="width: 18rem;">
		<div class="card-body">
		<h5 class="card-title">` + user + `</h5>
		<h6 class="card-subtitle mb-2 text-muted">` + (`<span class="fa fa-star checked"></span>`).repeat(score) + `</h6>
		<p class="card-text">` + texto + `</p>
		<p class="card-text">` + year + "-" + month + "-"+ day + " " + hour + ":" + minutes + ":" + seconds + `</p>
		</div>
		</div>`;
	
	//lo agrega a las "diaspositivas"
	document.getElementById("com_div").innerHTML += `
		<div id="trew" class="mySlides card center" style="width: 18rem;">
		<div class="card-body">
		<h5 class="card-title">` + user + `</h5>
		<h6 class="card-subtitle mb-2 text-muted">` + (`<span class="fa fa-star checked"></span>`).repeat(score) + `</h6>
		<p class="card-text">` + texto + `</p>
		<p class="card-text">` + year + "-" + month + "-"+ day + `</p>
		</div>
		</div>`;
	
	sessionStorage.setItem("comentario_reciente", document.getElementById("recent_com_si").innerHTML);
	sessionStorage.setItem("trew_reciente", document.getElementById("trew").innerHTML)
};


//función encargada de mostrar los productos relacionados
function showRelated(array_to){
	var relToAppend = "";
    for(let i = 0; i < 1; i++){
		let pro = array_to[products_array.relatedProducts[0]];
		let roma = array_to[products_array.relatedProducts[1]];
		
		relToAppend += `
		<a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + pro.imgSrc + `" alt="` + pro.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ pro.name +`</h4>
                            <small class="text-muted">` + pro.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + pro.description + `</p>
						<p class="mb-1">` + pro.cost + `</p>
						<p class="mb-1">` + pro.currency + `</p>
                    </div>
                </div>
            </a>
            `
		
		
		relToAppend += `
		<a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + roma.imgSrc + `" alt="` + roma.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ roma.name +`</h4>
                            <small class="text-muted">` + roma.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + roma.description + `</p>
						<p class="mb-1">` + roma.cost + `</p>
						<p class="mb-1">` + roma.currency + `</p>
                    </div>
                </div>
            </a>
            `

        document.getElementById("related_container").innerHTML = relToAppend;
    };
};

//función encargada de mostrar los comentarios como diaspositivas
var slideIndex = 1;

function showSlides(n) {
  let  slides = document.getElementsByClassName("mySlides"); 
  
  if (n > slides.length) {slideIndex = 1};   
  
  if (n < 1) {slideIndex = slides.length};
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  };
  
  slides[slideIndex - 1].style.display = "block";
};


function plusSlides(n) {
  showSlides(slideIndex += n);
}


//función encargada de mostrar la imagenes como diaspositivas
var imgIndex = 1;

function showImgCaru(n) {
  let  imgSlides = document.getElementsByClassName("myImgSlides"); 
  
  if (n > imgSlides.length) {imgIndex = 1};   
  
  if (n < 1) {imgIndex = imgSlides.length};
  
  for (let i = 0; i < imgSlides.length; i++) {
      imgSlides[i].style.display = "none";  
  };
  
  imgSlides[imgIndex - 1].style.display = "block";
};


function plusImgSlides(n) {
  showImgCaru(imgIndex += n);
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
	//sección del producto
	getJSONData(PRODUCT_INFO_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            products_array = check.data;
            showProduct(products_array); //se procesan los datos del producto
			showImgs(products_array.images); //se procesan las imagenes del prodcuto
			plusImgSlides(1)
        };
    });
	
	
	//sección de los comentarios
	getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            comments_array = check.data;
            showComms(comments_array); //se procesan los comentarios
			showSlides(slideIndex); //se inician las "diaspositivas"
        };
    });
	
	
	//sección productos relacionados
	//sección de los comentarios
	getJSONData(PRODUCTS_URL).then(function(check){
        console.log("Check status: " + check.status);
        if (check.status === 'ok'){
            related_array = check.data;
			showRelated(related_array);
        };
    });
	
	
	//analiza el comentario mas reciente
	if(sessionStorage.getItem("comentario_reciente") == null){
		document.getElementById("recent_com_si").innerHTML = `
		<div class="card center" style="width: 18rem;">
			<div class="card-body">
				<h5 id="rec_user" class="card-title">hombre_azul</h5>
				<h6 id="rec_points" class="card-subtitle mb-2 text-muted"><span class="fa fa-star checked"></span></h6>
				<p id="rec_desc" class="card-text">Este auto es muy rojo</p>
				<p id="rec_time" class="card-text">2021-09-01 10:00:21</p>
			</div>
		</div>`
		} else {
			document.getElementById("recent_com_si").innerHTML = sessionStorage.getItem("comentario_reciente");
	};
});