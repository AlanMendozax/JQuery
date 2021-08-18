$(document).ready(function(){

//Evento de selección de archivo del input
	$('#imagen').change(function(){	
	    	
		//Basado en el video de la práctica 3 que el docente subio
		var x = $('#imagen').val();//El archivo seleccionado por el input "imagen" se pasa a la variable x				
		$('#imagen').attr("src", x); //Se modifica con attr la informacion que se tiene por "src"
        
		var anc= $('#imagen').width();//Igualamos "anc" con la informacion del tamaño de ancho que tiene la imagen
		var lar= $('#imagen').height();////Igualamos "lar" con la informacion del tamaño de largo que tiene la imagen		
		$('#ancho').html(anc); //Se toma la informacion de las variables y se mandan al parrafo "ancho"
		$('#largo').html(lar);//Se toma la informacion de las variables y se mandan al parrafo "largo"		
	});

//Evento click del boton
	$('#boton1').click(function(){
		var image = new Image();
        var src = $('#imagen').val();
        image.src = src;

    $('#cuadro').append(image);
	});
	
});