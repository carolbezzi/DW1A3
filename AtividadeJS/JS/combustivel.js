function calculo(){
    var etanol = parseFloat(document.getElementById('etanol').value.replace(",","."));
    var gasolina = parseFloat(document.getElementById('gasolina').value.replace(",","."));

    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').innerHTML = ("O preço mais vantajoso é do etanol");
    }
    else{
        document.getElementById('status').innerHTML = ("O preço mais vantajoso é da gasolina");
    }
}

function apagar(){
    location.reload(forceGet=true);
}