var n1 = '0';
var operacao = null;
var n2 = '';
var clicadoEmIgual = false;

function mostrarNoDisplay(valor) {
    /*
    let display = document.querySelector('#display');
    display.innerHTML = valor;
    */
    document.querySelector('#display').innerHTML = valor;
}

function limpar() {
    n1 = '0';
    operacao = null;
    n2 = '';
    mostrarNoDisplay(n1);
}

function obterPorcento() {
    if (!n2) {
        limpar();
        mostrarNoDisplay(n1);
    } else {
        if (operacao === '+' || operacao === '-') {
            var porcento = n1 * n2 / 100;
        } else {
            var porcento = n2 / 100;
        }
        n2 = porcento;
        mostrarNoDisplay(n2);
    }
}

function iniciarCalculo(simbolo) {
    if (clicadoEmIgual) {
        clicadoEmIgual = false;
        n2 = '';
    }
    if (operacao === null || n2 === '') {
        operacao = simbolo;
    } else {
        // já tem n1, operacao, n2
        let resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        n2 = '';
        mostrarNoDisplay(n1);
    }
}

function incluirDigito(digito) {
    if (n2 && operacao && clicadoEmIgual) {
        clicadoEmIgual = false;
        limpar();
        n1 = digito;
        mostrarNoDisplay(n1);
        return; // coloca o 'return' pra se entrar dentro dessa condição, náo continuar executando o código abaixo.
    }
    if (operacao !== null) {
        n2 += digito;
        mostrarNoDisplay(n2);
    } else {
        if (n1 === '0') {
            n1 = digito;
        } else {
            n1 += digito;
        }
            mostrarNoDisplay(n1);
    }
}

function finalizarCalculo() {
    clicadoEmIgual = true;
    var resultado = calcular();
    n1 = resultado;
    mostrarNoDisplay(n1);
}

function incluirPonto() {
    if (operacao && n2 === '') {
        n2 = '0.';
    } else if (operacao && n2) {
        n2 += '.';
    } else {
        n1 += '.';
    }
}

function calcular() {
    let n = 0;
    let _n1 = parseFloat(n1);
    let _n2 = parseFloat(n2);
    switch(operacao) {
        case '+':
            n = _n1 + _n2;
            break;
        case '-':
            n = _n1 - _n2;
            break;
        case '*':
            n = _n1 * _n2;
            break;
        case '/':
            n = _n1 / _n2;
    }
    return n;
}