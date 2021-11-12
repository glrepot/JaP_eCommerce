var articulos, sub_price, tot_price, extra_s, extra_m, ok_to_pass, texto, env_porc;
articulos = [];
sub_price = 0;
tot_price = 0;
extra_s = false;
extra_m = false;
env_porc = 0;
ok_to_pass = 0;
texto = null;

var pine_count = 0;
var car_count = 0;


//agrega los datos del carrito al html
function showArt(array_to){
	var agre = ""
	for(let i = 0; i <  array_to.length; i++){
		let gar = array_to[i];
		
		agre +=
		`<tr id="`+ gar.name +`">
			<td>` + gar.name + `</td>
			<td><input type="number" id="`+gar.currency+`" name="`+gar.currency+`" min="1" max="100" value="`+ gar.count +`" onclick="suma_cant('`+ gar.currency +`','`+ gar.name +`')"></td>
			<td>` + gar.unitCost +  ` ` + gar.currency + ` ` + `<button class="button_style_removal" onclick="removeItem('`+ gar.name +`','`+ gar.currency +`')">X</button></td>
		</tr>`
		
		
		if(gar.name == "Pino de olor para el auto"){
			pine_count = gar.count;
			sub_price += gar.unitCost * gar.count;
			tot_price += gar.unitCost * gar.count;
		} else {
			car_count = gar.count;
			sub_price += gar.unitCost * gar.count * 40;
			tot_price += gar.unitCost * gar.count * 40;
		};
	};
	
	document.getElementById("cool").innerHTML += agre;
	document.getElementById("sub_total").innerHTML = "Subtotal: " + sub_price + " (precio total en UYU)";
	var iues = tot_price / 40;
	document.getElementById("total").innerHTML = "Total: " + tot_price + " UYU" + " (" + iues + " USD" + ")";
};


//borra productos del carrito
function removeItem(id_to, count_to){
	var rem = document.getElementById(id_to);
	var rem_cant = document.getElementById(count_to).value;
	
	if(id_to == "Pino de olor para el auto"){
		var price = 100 * rem_cant;
		sub_price -= price
		tot_price -= price;
	} else {
		var price2 = 500000 * rem_cant;
		sub_price -= price2
		tot_price -= price2;
	}
	
	document.getElementById("sub_total").innerHTML = "Subtotal: " + sub_price + " (precio total en UYU)";
	var iues = tot_price / 40;
	document.getElementById("total").innerHTML = "Total: " + tot_price + " UYU" + " (" + iues + " USD" + ")";
	check_2();
	rem.parentNode.removeChild(rem);
};


//hace los calculos de la cantidad
function suma_cant(id_to, name_to){
	var canti = document.getElementById(id_to).value;
	
	if (name_to == "Pino de olor para el auto"){
		if(pine_count < canti){
			pine_count = canti;
			sub_price += 100;
			tot_price += 100;
		} else if(pine_count > canti){
			pine_count -= 1;
			sub_price -= 100;
			tot_price -= 100;
		};
	} else {
		if(car_count < canti){
			car_count = canti;
			sub_price += 500000;
			tot_price += 500000;
		} else if(car_count > canti){
			car_count -= 1;
			sub_price -= 500000;
			tot_price -= 500000;
		};
	};
	
	document.getElementById("sub_total").innerHTML = "Subtotal: " + sub_price + " (precio total en UYU)";
	var iues = tot_price / 40;
	document.getElementById("total").innerHTML = "Total: " + tot_price + " UYU" + " (" + iues + " USD" + ")";
};

//cambia el texto de a donde se dirige el producto y calcula si hay costo extra o no
function check(){
	var serect = document.getElementById("derect").value;
	
	if(serect == "agencia"){
		document.getElementById("direccion_aod").innerHTML = "Dirección de la agencia:";
		if(extra_s == true){
			tot_price -= 200
			extra_s = false;
		};
	} else {
		document.getElementById("direccion_aod").innerHTML = "Dirección del domicilio:";
		extra_s = true;
		tot_price += 200
	};
	
	var iues = tot_price / 40;
	document.getElementById("total").innerHTML = "Total: " + tot_price + " UYU" + " (" + iues + " USD" + ")";
};


//calcula costo extra si se hace envio rapido o no
function check_2(){
	var rerect = document.getElementById("rerect").value;
	var porc = null;
	
	tot_price -= env_porc;
	
	if(rerect == "normal"){
		porc = (5/100) * sub_price;
		env_porc = porc;
	} else if(rerect == "rapido") {
		porc = (7/100) * sub_price;
		env_porc = porc;
	} else {
		porc = (15/100) * sub_price;
		env_porc = porc;
	};
	
	tot_price += env_porc;
	var iues = tot_price / 40;
	document.getElementById("total").innerHTML = "Total: " + tot_price + " UYU" + " (" + iues + " USD" + ")";
};


//agrega bordes rojos si no se completan los campos, ademas de mostrar un texto pidiendo que se completen los campos
function rojo(input_id, input_error){
    var id_ingresada = document.getElementById(input_id);
	var err = document.getElementById("err_msg");
    if(id_ingresada.value.length < 1) {
        id_ingresada.classList.add("error");
		err.style.display = "block";
		if(ok_to_pass == 0){
			return;
		} else {
			ok_to_pass -= 1;
		};
    } else {
        id_ingresada.classList.remove("error");
		err.style.display = "none";
		ok_to_pass += 1;
    };
};


//si todo esta completo, se meustra el mensaje de compra
function finalCheck(){
	var err = document.getElementById("err_msg");
	
	if(ok_to_pass >= 7){
		err.style.display = "none";
		getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            texto = resultObj.data;
			err.style.display = "none";
			alert(texto.msg);
			window.location.href= "https://glrepot.github.io/jap_ecommerce/index.html";
		};
	 });
	} else {
		err.style.display = "block";
	};
};


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
	 getJSONData(EXTRA_CART).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articulos = resultObj.data;
			showArt(articulos.articles);
		};
	 });
	 var err = document.getElementById("err_msg");
	 err.style.display = "none";
});