$('.no-js').removeClass('no-js');

$(function(){

	// Add toggles
	var $navsWithToggle = $('#js-menu');
	$navsWithToggle.each(function() {
		$(this).before('<div class="nav-toggle"><span class="nav-toggle__text">Menu</span> <span class="nav-toggle__box"><i class="nav-toggle__icon"></i></span></div>');
	});

	// Do the toggle
	$('.nav-toggle').click(function() {
		$(this).toggleClass('is-active');
		$navsWithToggle.toggleClass('is-active');
		return false;
	});

});