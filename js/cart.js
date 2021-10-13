var articulos = [];


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
	
	console.log(agre);
	document.getElementById("cool").innerHTML = agre;
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
});