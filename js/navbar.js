window.onscroll = function() { navScroll() };

function navScroll() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementsByClassName("nav_img").className = "animation";
    } else {
        document.getElementsByClassName("nav_img").className = "";
    }
}