var historico = [];

function calcular(){

    var operacao = document.getElementById('operacao').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = null;   
    var simbolo = null;    
    
    if(num1 == '' || num1 == null){
        alert("Favor digitar um número válido no primeiro campo");
        return false;
    }
    
    if(num2 == '' || num2 == null){
        alert("Favor digitar um número válido no segundo campo");
        return false;
    }   

    num1 = parseFloat(num1); //parseFloat analisa um texto e retorna um número
    num2 = parseFloat(num2);

    switch(operacao){
        case '1': //adição
            resultado = num1 + num2;
            simbolo = ' + ';           
            break;
        case '2': //subtração
            resultado = num1 - num2;  
            simbolo = ' - ';     
            break;
        case '3': //divisão
            resultado = num1 / num2;
            simbolo = ' / ';
            break;
        case '4': //multiplicação
            resultado = num1 * num2;
            simbolo = ' * ';
            break;
        default:
            alert('Selecione uma operação');
            return false;
    } 

         
    document.getElementById('operacao').value = '';    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').value = resultado;
    var operacao_atual = num1 + simbolo + num2 + " = " + resultado;
    historico.push(operacao_atual);      
    if (historico.length > 2) {
        historico = historico.slice(-3);  
    }
    document.getElementById('historico').value = historico.join(', ');          
                                    
}

   
   

    