// Aqui a gente guarda o resultado das contas e o que tá aparecendo na tela
let runningTotal = 0; // O total da operação que a gente tá fazendo. Começa com zero
let buffer = "0"; // O número que a gente digita ou o resultado parcial. Começa com "0" 
let previousOperator; // Qual foi a última operação (+, -, x, /). OBS: Por enquanto, não tem nenhuma

// Pega a tela da calculadora (onde aparece o número) e guarda na variável 'screen'
const screen = document.querySelector('.screen');

// Essa função é chamada quando a gente clica em um botão
function buttonClick(value){
    if(isNaN(value)){ // Se o botão clicado NÃO for um número (tipo +, -, C, =)
        handleSymbol(value); // A gente lida com o símbolo (veja a função handleSymbol)
    }else{ // Se o botão clicado FOR um número
        handleNumber(value); // A gente lida com o número (veja a função handleNumber)
    }
    screen.innerText = buffer; // Mostra o que tá no 'buffer' na tela da calculadora
}

// Essa função cuida dos símbolos (C, =, ←, +, -, x, /)
function handleSymbol(symbol){ 
    switch(symbol){ // Dependendo do símbolo clicado, a gente faz uma coisa
        case 'C': // Se o símbolo for 'C' (limpar tudo)
            buffer = '0'; // Zera o número que tá na tela
            runningTotal = 0; // Zera o total da conta
            break; // Sai do 'switch'
        case '=': // Se o símbolo for '=' (resultado)
            if(previousOperator === null){ // Se a gente não tiver feito nenhuma operação antes
                return; // Não faz nada e sai da função 
            }    
            flushOperation(parseInt(buffer)); // Faz a operação que tava pendente
            previousOperator = null; // Diz que não tem operação pendente agora
            buffer = runningTotal; // O resultado da conta vai pro 'buffer' (pra tela)
            runningTotal = 0; // Zera o total de novo
            break; // Sai do 'switch'
        case '←': // Se o símbolo for '←' (apagar um número)
            if(buffer.length ===1){ // Se só tiver um número na tela
                buffer = '0'; // Bota "0" no lugar
            }else{ // Se tiver mais de um número
                buffer = buffer.substring(0, buffer.length - 1); // Apaga o último número
            }
            break; // Sai do 'switch' (não aguento mais tanto sai do 'switch')
        case '+': // Se o símbolo for '+'
        case '−': // Se o símbolo for '-'
        case '×': // Se o símbolo for 'x'
        case '÷': // Se o símbolo for '/'
            handleMath(symbol); // Faz a operação matemática (verifique a função handleMath)
            break; // Sai do 'switch' (outra vez :D )
    }
}

// Essa função cuida das operações matemáticas (+, -, x, /)
function handleMath(symbol){
    if(buffer === '0'){ // Se não tiver nenhum número na tela, não faz nada
        return; // Sai da função
    }

    const intBuffer = parseInt(buffer); // Transforma o que tá na tela de texto pra número

    if(runningTotal === 0){ // Se for a primeira operação
        runningTotal = intBuffer; // O número da tela vira o total
    }else{ // Se já tiver um total, a gente faz a conta com o número da tela
        flushOperation(intBuffer); // Faz a operação (veja a função flushOperation)
    }
    previousOperator = symbol; // Guarda qual foi a operação que a gente fez agora
    buffer = '0'; // Limpa a tela pra gente digitar o próximo número
}

// Essa função faz a operação matemática de fato
function flushOperation(intBuffer){ // Se a operação anterior for '+'
    if(previousOperator === '+'){ // Se a operação anterior for '+'
        runningTotal += intBuffer; // Soma o número da tela com o total
    }else if(previousOperator === '−'){ // Se for '-'
        runningTotal -= intBuffer; // Subtrai
    }else if(previousOperator === '×'){ // Se for 'x'
        runningTotal *= intBuffer // Multiplica
    }else if(previousOperator === '÷'){ // Se for '/'
        runningTotal /= intBuffer; // Divide o total em andamento pelo valor do buffer
    }
}

// Essa função cuida de quando a gente digita um número
function handleNumber(numberString){ 
    if(buffer === "0"){ // Se não tiver nenhum número na tela ainda
        buffer = numberString; // O número que a gente digitou entra direto
    }else{ // Se já tiver um número na tela
        buffer += numberString; // O número que a gente digitou junta com o que já tava lá
    }
}

// Essa função começa a brincadeira toda
function init(){ 
    document.querySelector('.calc-buttons').addEventListener('click', function(event){ // Quando clica em um botão
    buttonClick(event.target.innerText) // Chama a função buttonClick com o que tá escrito no botão
    }) 
}

init(); // começa a calculadora!! (acabei, obrigado jesus. Faça isso rodar por favor)