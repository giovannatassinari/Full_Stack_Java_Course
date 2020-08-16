function iniciaJogo(){
    
    var url = window.location.search;
    
    var nivel_jogo = url.replace("?","");
    
    var tempo_segundos = 0;
    
    if(nivel_jogo == 1){
        tempo_segundos = 5;
    }

    if (nivel_jogo == 2) {
        tempo_segundos = 20;
    }

    if (nivel_jogo == 3) {
        tempo_segundos = 15;
    }

    document.getElementById('cronometro').innerHTML = tempo_segundos;

    var qtd_baloes = 10;
    
    document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    cria_baloes(qtd_baloes);

    contagem_tempo(tempo_segundos + 1);
}

var cenario = document.getElementById('cenario').innerHTML = cenario;

function cria_baloes(qtd_baloes) {    
    for(var i = 0; i < qtd_baloes; i++) {
        var balao = document.createElement('img');
        balao.src = "imagens/balao_azul_pequeno.png";
        balao.style.margin = "45px";
        balao.style.padding = "15px";
        balao.style.cursor = "pointer";
        balao.id = "b" + i;        
        balao.onclick = function() {
            estourar(this);
        }
        document.getElementById('cenario').appendChild(balao);
    }
}

Math.round(Math.random)

function estourar(img){
    var id_balao = img.id;   
    document.getElementById(id_balao).setAttribute('onclick',''); 
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
    pontuacao(1);    
}

function contagem_tempo(segundos){

    segundos = segundos - 1;

    if(segundos == - 1){
        clearTimeout(timerId);
        game_over();
        return false;
    }
 
    document.getElementById('cronometro').innerHTML = segundos;

    timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function pontuacao(acao){
    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);
    
    baloes_inteiros--;
    baloes_estourados++;

    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    venceu_jogo(baloes_inteiros);
}

function venceu_jogo(baloes){
    var mensagem = '';    
    if(baloes == 0){
        //alert('Parabéns! Você conseguiu estourar todos os balões a tempo.');
        mensagem = 'Parabéns! Você conseguiu estourar todos os balões a tempo. ';
        document.getElementById('mensagem').innerHTML = mensagem;
        pararJogo();  
        jogarNovamente();      
    }
}

function game_over(){   
    sem_clicks();
    //alert("Fim de jogo. Você não conseguiu estourar todos os balões.");
    mensagem = "Fim de jogo. Você não conseguiu estourar todos os balões. ";
    document.getElementById('mensagem').innerHTML = mensagem;
    jogarNovamente();
}

function pararJogo(){
    clearTimeout(timerId);
}

function jogarNovamente(){
    mensagem2 = "Jogar novamente   ";
    document.getElementById('mensagem2').innerHTML = mensagem2;
    var replay = document.createElement('img');
    replay.src = "imagens/replay.png";
    replay.style.width = '25px';    
    replay.style.cursor = "pointer";
    document.getElementById('mensagem2').appendChild(replay);
    replay.onclick = function() {
         window.location.reload();
    }
}

function sem_clicks(){
    var i = 1;
    while(document.getElementById('b'+ i)){
        document.getElementById('b' + i).onclick = '';
        i++;
    }
}
