

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function(){


	// Mix It Up---------Portfolio
	var mixer=mixitup('.container');
})

function openNav(){
	document.getElementById("myNav").style.width="100%";
}
function closeNav(){
	document.getElementById("myNav").style.width="0%";
}

//---------------Smooth Scroll
$("a").on('click',function(){
	if (this.hash !=="") {
		event.preventDefault();
		var hash= this.hash;

		$('html, body').animate({
			scroolTop: $(hash).offset().top
		},800 ,function(){
			window.location.hash = hash;

		})
	}
})









