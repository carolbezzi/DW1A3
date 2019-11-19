function celsiusTOfah() {
    var inp1 = document.getElementById("input1").value;
    var res1 = inp1 * 9/5  + 32;
    var res1 = res1.toFixed(2);
        

    document.getElementById("t1").innerHTML ="A temperatura convertida é: " + res1 + " (°F)";
}

function fahTOcelsius() {

    var inp2 = document.getElementById("input2").value;
    var res2 =  (inp2 - 32) * 5/9;
    var res2 = res2.toFixed(2);
        

    document.getElementById("t2").innerHTML ="A temperatura convertida é " + res2  + " (°C)"; 
}


function apagar(){
    location.reload(forceGet=true);
}



