
head.ready(function() {

	$('#thumbnails li').click(function(){
		var srcLink = $(this).attr('data-src');
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.slider img').attr('src', srcLink);
	});

	// Counter

	var d = [1, 7, 6, 5, 4, 3, 2];
	var today = new Date();
	var end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d[today.getDay()], 23, 59, 59);
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		var days = Math.floor(distance / _day);
		if (days < 10) days = '0' + days;
		var hours = Math.floor((distance % _day) / _hour);
		if (hours < 10) hours = '0' + hours;
		var minutes = Math.floor((distance % _hour) / _minute);
		if (minutes < 10) minutes = '0' + minutes;
		var seconds = Math.floor((distance % _minute) / _second);
		if (seconds < 10) seconds = '0' + seconds;

		$(".counter .h").html(hours);
		$(".counter .m").html(minutes);
		$(".counter .s").html(seconds);
	}

	timer = setInterval(showRemaining, 1000);

	$('.root-b.b1 form').validate();


	$('.navbar-nav a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 20
		}, 500, 'swing', function () {
			// window.location.hash = target;
		});
	});

});