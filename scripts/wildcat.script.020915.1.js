jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function testActiveJS (argument) {
	window.alert('jQuery is roaring to go!');
}

function pictureChanger1 () {
	$('#pageImage').focus(function(event) {
		/* Act on the event */
		$(this).addClass('imageBlur');
	});

	$('#pageImage').blur(function(event) {
		/* Act on the event */
		$(this).removeClass('imageBlur');
	});
}

function pictureChanger2 () {
	$("#pageImage").hover(function() {
	    $(this).addClass("imageBlur");
	}, function() {
	    $(this).removeClass("imageBlur");
	});
}

function pictureChanger3 (argument) {
	$('img#pageImage').mousemove(function(event) {
		/* Act on the event */
		$(this).toggleClass('imageBlur');
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

// testActiveJS();
// pictureChanger1();
// pictureChanger2();
// pictureChanger3();

//////////////////////////////////////////////////

});  //end doc.onready function
