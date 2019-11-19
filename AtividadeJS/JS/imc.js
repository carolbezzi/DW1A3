function calculo_imc(){
    //var dados = document.getElementById('dados');
    var kg = document.getElementById('peso').value;
    var h = document.getElementById('altura').value;

    var n1 = (h/100);

    var imc = kg / (Math.pow(n1,2));
    
    document.getElementById("imc").value = imc.toFixed(1);
    
    if(imc < 16.9){
        document.getElementById('conclusao').innerHTML = ("Atenção! Você está muito abaixo do peso ideal");
        peso_ideal();
    } 
    else if(imc > 17 && imc <= 18.4){
        document.getElementById('conclusao').innerHTML = ("Atenção! Você está abaixo do peso ideal");
        peso_ideal();
    }
    else if(imc > 18.5 && imc <= 24.9){
        document.getElementById('conclusao').innerHTML = ("Parabéns! Você está dentro do seu peso ideal");
        peso_ideal();
    }
    else if(imc > 25 && imc <= 29.9){
        document.getElementById('conclusao').innerHTML = ("Atenção! Você está acima do seu peso ideal");
        peso_ideal();
    }
    else if(imc > 30 && imc <= 34.9){
        document.getElementById('conclusao').innerHTML = ("Cuidado! Você está com Obesidade Grau I");
        peso_ideal();
    }
    else if(imc > 35 && imc <= 40){
        document.getElementById('conclusao').innerHTML = ("Cuidado! Você está com Obesidade Grau II");
        peso_ideal();
    }
    else{
        document.getElementById('conclusao').innerHTML = ("Cuidado! Você está com Obesidade Grau III");
        peso_ideal();
    }
}

function peso_ideal(){
    var kg = document.getElementById('peso').value;
    var h = document.getElementById('altura').value;
    var indice = document.getElementById("imc").value

    var n1 = (h/100);

    var p1 = 24.9*(n1*n1);

    var p2 = kg-p1;

    var p3 = p1-kg;

    if (indice>24.9){
        document.getElementById('conc_2').innerHTML = ("Para atingir seu peso ideal você precisa emagrecer aproximadamente "+Math.abs(p3.toFixed(0))+" quilos");
    }

    else if (indice<18.5){
        document.getElementById('conc_2').innerHTML = ("Para atingir seu peso ideal você precisa engordar aproximadamente "+Math.abs(p2.toFixed(0))+" quilos");
    }
}

function apagar(){
    location.reload(forceGet=true);
}
