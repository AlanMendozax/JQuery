/* Funcion principal */
$(document).ready(function(){

/* Funcion de evento clic*/
	$('#btn-aplicar').click(function(){

		/* Declaración de variable que va a tomar el valor del input */
var color = $('#elegir')[0].value;

/* Cambiar el color del fondo */
		$('#div1').css("background-color", color);
	});
});

/* Fuentes */
/* https://stackoverflow.com/questions/31606129/how-to-change-desired-divs-background-color-by-entering-hex-color-in-input-file */
/* https://stackoverflow.com/questions/53951422/get-color-of-div-in-hex-format-jquery */
