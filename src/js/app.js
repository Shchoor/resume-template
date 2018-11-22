"use strict";

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('nav').find('a').removeClass("selected");
    $('nav').find(`a[href^="${event.currentTarget.hash}"]`).addClass("selected");

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(document).on('mousewheel', function() {
	$('html, body').stop();
});