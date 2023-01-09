/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import $ from 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/main.scss';


$(document).ready(function () {
    console.log("Loading  packages main");
});


console.log('Main   assets imported');

/*$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    });

});
*/
$(document).ready(function () {
    var owlreviews = $('.owl-review');
    owlreviews.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        dots: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});


$(document).ready(function () {
	$('ul.nav li.dropdown').hover(
		function () { $(this).find('.dropdown-menu').stop(true, true).fadeIn(); }, 
		function () { $(this).find('.dropdown-menu').stop(true, true).fadeOut(); }
	);
	if( $('#navbar-tel').css('display')=='none') {
		//we want to have a hack for click on services dropdown that we need to stop on mobile we use the phone to know when to stop the href
		$('ul.nav li.dropdown .active-dropdown-href').removeAttr("href");
    }
});

