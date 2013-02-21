$('.no-js').removeClass('no-js');

$(function(){

	// Add toggles
	var $navsWithToggle = $('#js-rough-navigation-toggle');
	$navsWithToggle.each(function() {
		$(this).before('<div class="navigation-toggle-button"><span class="navigation-toggle-button__text">Menu</span> <span class="navigation-toggle-button__box"><i class="navigation-toggle-button__icon"></i></span></div>');
	});

	// Do the toggle
	$('.navigation-toggle-button').click(function() {
		$(this).toggleClass('is-active');
		$navsWithToggle.toggleClass('is-active');
		return false;
	});

});