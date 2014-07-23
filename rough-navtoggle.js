(function($){

	function RoughNavToggle(el, options) {

		//Defaults:
		this.defaults = {
			activeClass: 'is-active',
			label: 'Menu'
		};

		//Extending options:
		this.opts = $.extend({}, this.defaults, options);

		//Privates:
		this.$el = $(el);
		this.$toggle = null;
	}

	// Separate functionality from object creation
	RoughNavToggle.prototype = {

		init: function() {
			var _this = this;

			_this.insertButton();
			_this.events();
		},

		events: function(element){
			var self = this;

			// Toggle the navigation on click
			this.$el.prev('.NavToggle').on('click', $.proxy(this.toggle, this));
		},

		insertButton: function(element){

			// Insert button markup before the nav
			var navToggleMarkup = [
			'<button class="NavToggle">',
				'<span class="NavToggle-box"><i class="NavToggle-icon"></i></span>',
				'<span class="NavToggle-label">'+this.opts.label+'</span> ',
			'</button>'].join("\n");

			this.$toggle = $(navToggleMarkup);
			this.$el.before(this.$toggle);
		},

		toggle: function(event){

			// toggle button
			this.$toggle.toggleClass('is-active');

			// toggle navigation
			this.$el.toggleClass('is-active');
		}

	};

	// The actual plugin
	$.fn.roughNavToggle = function(options) {
		if (this.length) {
			this.each(function() {
				var rev = new RoughNavToggle(this, options);
				rev.init();
				$(this).data('roughNavToggle', rev);
			});
		}
	};
})(jQuery);
