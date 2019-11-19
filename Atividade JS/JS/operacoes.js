function calculo() {
    var n1 = parseInt(document.getElementById('n1').value);     
    var n2 = parseInt(document.getElementById('n2').value);     

    document.getElementById('soma').innerHTML = (" " + (n1 + n2) + "<br/>");
    document.getElementById('subtracao').innerHTML = (" " + (n1 - n2) + "<br/>");
    document.getElementById('produto').innerHTML = (" " + (n1 * n2) + "<br/>");
    document.getElementById('divisao').innerHTML = (" " + (n1 / n2) + "<br/>");    
    document.getElementById('resto').innerHTML = (" " + (n1 % n2) + "<br>");
}

function apagar(){
    location.reload(forceGet=true);
}

