(function($){

	function RoughToggle(el, options) {

		// Defaults:
		this.defaults = {
			activeClass: 'is-active',
			target: false,
			closeOutside: false
		};

		// The options that get passed will overwrite merge and overwrite the defaults
		this.opts = $.extend({}, this.defaults, options);

		// Privates:
		this.$el = $(el);
		this.$target = null;
	}

	// Separate functionality from object creation
	RoughToggle.prototype = {

		init: function() {
			this.getTarget();
			this.getCloseOutside();
			this.events();
		},

		events: function(element){
			var self = this;

			// Toggle the navigation on click
			this.$el.on('click', $.proxy(this.toggle, this));
		},

		getTarget: function(){
			var target = this.opts.target;

			if (!target) {
				target = this.$el.data('target');
			}

			this.$target = $(target);
		},

		getCloseOutside: function(){
			var closeOutside = this.opts.closeOutside;

			if (closeOutside || this.$el.data('closeOutside') === 'true') {
				// enable functionality that will close 'on outside'
				closeOutside = true;
				console.log(this.opts.closeOutside);
			}
		},

		toggle: function(event){
			// toggle button
			this.$el.toggleClass('is-active');
			// toggle navigation
			this.$target.toggle();
		}

	};

	// The actual plugin
	$.fn.roughToggle = function(options) {
		if (this.length) {
			this.each(function() {
				var rev = new RoughToggle(this, options);
				rev.init();
				$(this).data('roughToggle', rev);
			});
		}
	};
})(jQuery);
