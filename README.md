# Calculadora_estudos_js

Este repositório contém um código simples de calculadora implementado em JavaScript, HTML e CSS. A calculadora realiza as operações básicas de adição, subtração, multiplicação e divisão.

## Funcionalidades

*   **Operações básicas:** Adição (+), Subtração (-), Multiplicação (x) e Divisão (/).
*   **Limpar tudo (C):** Zera o visor e o total da operação.
*   **Apagar último dígito (←):** Remove o último número digitado.
*   **Resultado (=):** Exibe o resultado final da operação.

## Como usar

1.  Clone este repositório:
    `git clone https://github.com/HellmatGa/Calculadora_estudos_js`
2.  Abra o arquivo `index.html` em seu navegador.

## Como o código funciona

O código é estruturado em funções que lidam com diferentes aspectos da calculadora:

*   **`buttonClick(value)`:** Identifica se o botão clicado é um número ou um símbolo e chama a função apropriada.
*   **`handleSymbol(symbol)`:** Lida com os símbolos de operação (C, =, ←, +, -, x, /).
*   **`handleMath(symbol)`:** Executa a operação matemática correspondente.
*   **`flushOperation(intBuffer)`:** Realiza o cálculo com base no operador anterior.
*   **`handleNumber(numberString)`:** Adiciona o número digitado ao visor.
*   **`init()`:** Inicializa os ouvintes de eventos para os botões da calculadora.

## Melhorias

Este código pode ser aprimorado com as seguintes funcionalidades:

*   **Tratamento de erros:** Adicionar tratamento para divisão por zero e entradas inválidas.
*   **Funções avançadas:** Implementar funções como raiz quadrada, porcentagem, etc.
*   **Interface mais amigável:** Melhorar o design da interface da calculadora.

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Autor

Hellmat Gabriel de Arruda Araújo

## Licença

fique a vonts.
