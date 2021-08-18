
/* Creacion de un evento hover para JQuery que también se presentara en CSS */
$(window).load(function() {
	$('#tabla td, th').hover(function(){ 
		/* Se activa la funcion de hover en filas y columnas */
		/* Se agrega la clase Hover */
		$(this).addClass('hover');
}, function(){

	/* Se quita la clase hover si ya no se esta encima de los cuadros de la tabla */
	$(this).removeClass('hover');
});

/* Funcion de click que agrega la clase high cambiando el diseño */
$('#tabla td, th').click(function(){ 
		$(this).toggleClass('high');
});
});

/* Fuentes */
/* https://stackoverflow.com/questions/7971075/jquery-change-table-row-color-on-hover-getting-hover-events-to-work/7971171 */
/* https://stackoverflow.com/questions/17703710/changing-the-color-of-a-clicked-table-row-using-jquery*/
