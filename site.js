var x = 0;

window.onscroll = function() {stick()};

var navbar = document.querySelector('#navbar');

var sticky  = navbar.offsetTop;

function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}