jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function responsiveMenuHoverV1 () {
	$('.specialNavMenu').mouseover(function(event) {
		$('.responsiveNavList').css('display', 'list-item');
	});

	$('.responsiveNavList').mouseout(function(event) {
		$('.responsiveNavList').css('display', 'none');
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

// responsiveMenuHoverV1();

//////////////////////////////////////////////////

});  //end doc.onready function
