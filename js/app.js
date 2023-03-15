(function($) {

	$('.time-filter').on('click', function(e) {
		e.preventDefault();
		$('.time-filter').removeClass('active');
		$(this).addClass('active');
		var timeLabel = ".time-" + $(this).data("time");
		$(".time-label").removeClass('show');
		$(timeLabel).addClass('show');
	});

})(jQuery);