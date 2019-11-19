function sel_all(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function max_texto(valor) {
    quant = 150;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('tamanho').innerHTML = resto;
    } 
    else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
}