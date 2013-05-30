(function($){

	function RoughNavToggle(el, options) {

		//Defaults:
		this.defaults = {
		};

		//Extending options:
		this.opts = $.extend({}, this.defaults, options);

		//Privates:
		this.$el = $(el);
	}

	// Separate functionality from object creation
	RoughNavToggle.prototype = {

		init: function() {
			var _this = this;
			
			_this.insertButton();
			_this.bindClick();
		},

		insertButton: function(element){
			var _this = this;
			
			// Insert button markup before the nav
			var navToggleHTML = [
			 '<div class="NavToggle">',
			 	'<span class="NavToggle-text">Menu</span> ',
			 	'<span class="NavToggle-box"><i class="NavToggle-icon"></i></span>',
			 '</div>'].join("\n");
			this.$el.before(navToggleHTML);
		},

		bindClick: function(element){
			var _this = this;

			// Toggle on click
			this.$el.prev('.NavToggle').bind('click', _this.toggle);
		},

		toggle: function(element){


			// toggle button
			$(this).toggleClass('is-active');
			// toggle navigation
			// for some reason this.$el is not defined here, so we use next until I fix it
			$(this).next().toggleClass('is-active');
		}

	};

	// The actual plugin
	$.fn.roughNavToggle = function(options) {
		if(this.length) {
			this.each(function() {
				var rev = new RoughNavToggle(this, options);
				rev.init();
				$(this).data('roughNavToggle', rev);
			});
		}
	};
})(jQuery);