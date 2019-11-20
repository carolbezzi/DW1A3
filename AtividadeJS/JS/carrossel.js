var slideIndex = 1;
mostrarDiv(slideIndex);

function mudarDiv(n) {
    mostrarDiv(slideIndex += n);
}

function mostrarDiv(n) {
    var i;
    var x = document.getElementsByClassName("meusSlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    x[slideIndex-1].style.display = "block";  
}
