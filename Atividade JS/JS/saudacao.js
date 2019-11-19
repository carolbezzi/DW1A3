function exibir_saudacao(){
    
    saudacao = new Date(); 
    hour = saudacao.getHours();

    if(hour < 12)
    {
    document.write("Bom dia!");
    }
    else
    if(hour < 18)
    {
    document.write("Boa tarde!");
    }
    else
    {
    document.write("Boa noite");
    }
}

function dimensao_nav(){
    
    document.write('Resolução do navegador: '+screen.width+' x '+screen.height);
}

function dimensao_real_nav(){

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    
    document.write('Resolução real do navegador: '+width+' x '+height);
}