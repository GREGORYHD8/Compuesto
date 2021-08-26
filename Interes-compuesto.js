function limpiar() {
	document.getElementById("intereres-simple").reset();
	document.getElementById("intereres-compuesto").reset();
	document.getElementById("area-cuadrilatero").reset();
}

function intereresSimple(){ 

	var capital= document.getElementById("montoPrestamo").value;
	var t= document.getElementById("plazoPago").value;
	var r= document.getElementById("tasaAnual").value;
	var p= parseInt(r) + parseInt (1);

	pross= Math.pow(p,t);
	interes =(capital*pross);
	//var Cf = parseFloat(capital) + parseFloat(interes); 
	

	document.write("El Capital final sera:" + interes);
}








