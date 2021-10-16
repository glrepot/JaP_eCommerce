var articulos = [];
var cur_price = 0;
var extra_s = false;


//HACER OBLIGATORIO LOS CAMPOS Y MEJORAR LA VISUAL ADEMAS DE PODER MANEJAR LA CANTIDAD DE PRODUCTOS

function showArt(array_to){
	var agre = ""
	for(let i = 0; i <  array_to.length; i++){
		let gar = array_to[i];
		
		agre +=
		`<tr>
			<img src=` + gar.src + `alt=`+ gar.src + `>
			<td>` + gar.name + `</td>
			<td>` + gar.count + `</td>
			<td>` + gar.unitCost +  ` ` + gar.currency + `</td>
		</tr>`
	};
	
	document.getElementById("cool").innerHTML += agre;
};


function calculoSub(array_to){
	var subi = 0;
	
	for(let i = 0; i <  array_to.length; i++){
		let rur = array_to[i];
		
		if(rur.currency === "USD"){
			subi += rur.count * (rur.unitCost * 40);
		} else {
			subi += rur.count * rur.unitCost;
		};
	};
	
	cur_price += subi;
	calculoTotal(cur_price, false, 0);
	document.getElementById("sub_total").innerHTML = "Subtotal: " + subi + " (precio total en UYU)";
};


function calculoTotal(cur_to, extra, more_money){
	var iues = 0
	if(extra == true){
		cur_price -= 200;
	};
	
	cur_price += more_money;
	iues = cur_price / 40;
	document.getElementById("total").innerHTML = "Total: " + cur_price + " UYU" + " (" + iues + " USD" + ")";
};


function check(){
	var serect = document.getElementById("derect").value;
	
	if(serect == "agencia"){
		document.getElementById("direccion_aod").innerHTML = "Dirección de la agencia:";
		if(extra_s == true){
			calculoTotal(cur_price, true, 0);
			extra_s = false;
		};
	} else {
		document.getElementById("direccion_aod").innerHTML = "Dirección del domicilio:";
		extra_s = true;
		calculoTotal(cur_price, false, 200);
	};
};


function finalCheck(){
	//var 
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
			calculoSub(articulos.articles);
		};
	 });
});