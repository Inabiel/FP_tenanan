$(document).on('scroll', function () {
	if ($(document).scrollTop() > 86) {
		$('#nabil-slider').addClass('nabil-shrink');
	} else {
		$('#nabil-slider').removeClass('nabil-shrink');
	}
});

$(document).on('scroll', function () {
	if ($(document).scrollTop() > 86) {
		$('#nabil-scroll').addClass('nabil-progress-container');
	} else {
		$('#nabil-scroll').removeClass('nabil-progress-container');
	}
});

window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById('nabil-progbar').style.width = scrolled + '%';
}