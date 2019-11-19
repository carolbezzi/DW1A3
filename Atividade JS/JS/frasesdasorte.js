function nova_frase (){
    var texto = new Array ();
    texto[0] = "A vida é um caos aleatório,ordenada pelo tempo.";
    texto[1] = "O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.";
    texto[2] = "Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.";
    texto[3] = "Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.";
    texto[4] = "Faça a pessoa que você gosta se sentir especial ao invés de só mais uma";
    texto[5] = "E sem certezas do amanhã apostamos em um futuro aleatório.";
    texto[6] = "Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.";
    texto[7] = "As pessoas entram em nossa vida por acaso, mas não é por acaso que elas permanecem.";
    texto[8] = "Não espere por uma crise para descobrir o que é importante em sua vida.";
    texto[9] = "Não tentes ser bem-sucedido, tenta antes ser um homem de valor.";
    texto[10] = "Triste época! É mais fácil desintegrar um átomo do que um preconceito.";
    texto[11] = "Para conseguir a amizade de uma pessoa digna é preciso desenvolvermos em nós mesmos as qualidades que naquela admiramos.";
    texto[12] = "Os homens pensam que possuem uma mente, mas é a mente que os possui.";
    texto[13] = "As convicções são inimigas mais perigosas da verdade do que as mentiras.";
    texto[14] = "A medida do amor é amar sem medida.";
    texto[15] = "O que me preocupa não é o grito dos maus. É o silêncio dos bons";
    texto[16] = "Guardar ressentimento é como tomar veneno e esperar que a outra pessoa morra.";
    texto[17] = "Amar não é aceitar tudo. Aliás: onde tudo é aceito, desconfio que há falta de amor.";
    texto[18] = "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.";
    texto[19] = "Eu aprendi que para crescer como pessoa preciso me cercar de gente mais inteligente do que eu.";
    texto[20] = "O diabo pode citar as Escrituras quando isso lhe convém.";
    texto[21] = "Ah o amor... que nasce não sei onde, vem não sei como, e dói não sei porquê.";
    texto[22] = "Sábio é aquele que conhece os limites da própria ignorância.";
    texto[23] = "Só se vê bem com o coração, o essencial é invisível aos olhos.";
    texto[24] = "O silêncio é um amigo que nunca trai.";
    texto[25] = "Penso noventa e nove vezes e nada descubro; deixo de pensar, mergulho em profundo silêncio - e eis que a verdade se me revela.";
    texto[26] = "O amor é como a criança: deseja tudo o que vê.";
    texto[27] = "A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.";
    texto[28] = "Creio no riso e nas lágrimas como antídotos contra o ódio e o terror.";
    texto[29] = "Devemos julgar um homem mais pelas suas perguntas que pelas respostas.";
    texto[30] = "O importante não é vencer todos os dias, mas lutar sempre.";
    
    var x = Math.floor(31*Math.random())

    document.getElementById("frase").innerHTML = "" +texto[x];
}