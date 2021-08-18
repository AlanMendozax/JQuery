$(document).ready(function(){
	$('#imagen').change(function(){

        //Se deja en blanco el ancho y el largo para que la imagen nueva pueda tener la medida original
		$("#ubi").css("width", "");
		$("#ubi").css("height", "");

		//El archivo seleccionado en el input "imagen" se pasa a la variable x
		var x = $('#imagen').val();

		//Se modifica con attr la informacion que se tiene por "src" en la img llamanda "ubi"
		$('#ubi').attr("src", x); 
	});

	//Al pasar el cursor por la imagen se mostraran sus dimensiones
	$('img').mouseover(function(){
		
		var dim;

		dim ="Ancho: " + $('#ubi').width() + "<br>";
		dim += "Alto: " + $('#ubi').height() + "<br>";

		dim +="Ancho con pading: " + $('#ubi').innerWidth() + "<br>";
		dim += "Alto con padding: " + $('#ubi').innerHeight() + "<br>";

		dim +="Ancho con paddin y borde: " + $('#ubi').outerWidth() + "<br>";
		dim += "Alto con paddin y borde: " + $('#ubi').outerHeight() + "<br>";

		dim +="Ancho con paddin, borde y margen: " + $('#ubi').outerWidth(true) + "<br>";
		dim += "Alto con paddin, borde y margen: " + $('#ubi').outerHeight(true) + "<br>"

		$('#dimension').html(dim);
		 
	});

	var y = 0;

	var marc = $('#marcos').val();

	$('#boton2').click(function() {
		//toma el valor que se ingreso en el input ancho y se mando a css para su modificación
		var w= $('#ancho').val();
		$("#ubi").css("width", w);
		//toma el valor que se ingreso en el input alto y se mando a css para su modificación
		var h= $('#alto').val();
		$("#ubi").css("height", h);	
    });
	$('#marcos').click(function(){
	//funcion para la seleccion del marco al momento de dar click a la opción
		
		if($('#marcos').is(':checked')){
		//condicion: si el marco esta seleccionado entonces quitara el borde
			$('#ubi').css("border","0px");
		}else{
		//En caso de no estar seleccionado nuevamente pondra el borde o marco
			$('#ubi').css("border","5px solid black");
		}
	});

	$('#esqs').click(function(){

	    //funcion del boton para las esquinas del marco al momento de dar click a la opción
		var esquina = $('#esqn').val();

		//Tomamos la informacion del boton "esqn" y lo ponemos en la variable "esquina"
		$("#ubi").css("border-radius", esquina +"px");

		/*Mandamos a modificar en el CSS el estilo de "border-radios" para redondear los bordes con 
		base al numero que se ingreso en el input "esqn", y agregamos el px si no no sale:(*/
	});

    //funcion para la seleccion del sombredo al momento de dar click a la opción
	$('#sombras').click(function(){

	    //condicion: si la opcion esta seleccionada entonces pondra el sombreado 
		if($('#sombras').is(':checked')){

		    //mandamos los datos prederteminados a css
			$('#ubi').css("box-shadow", "12px 12px 14px 3px black");
			 
		}

		//En caso de no estar seleccionado quitara el sombreado en caso de tenerlo
		else{		
			$('#ubi').css("box-shadow", "");
			//mandamos los datos prederteminados a css 
		}
	});
});