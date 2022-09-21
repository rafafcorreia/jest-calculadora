const calculadora = require('../src/calculadora');
let massaSoma = [
    [1, 2, 3],
    [3, 7, 10],
    [5, 8, 13]
];

test.each(massaSoma)('somar %f + %f', (a, b, esperado) => {
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    
    expect(somarDoisNumeros(a, b)).toBe(esperado);
});

test('subtrair 1 - 2', () => {
    //Prepara / Configura
    const a = 1;
    const b = 2;
    const esperado = -1;
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    
    //Executa
    const obtido = subtrairDoisNumeros(a, b);
    
    //Valida
    expect(obtido).toBe(esperado);
});

test('multiplicar 1 * 2', () => {
    const a = 1;
    const b = 2;
    const esperado = 2;
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    
    expect(multiplicarDoisNumeros(a, b)).toBe(esperado);
});

test('dividir 1 / 2', () => {
    const a = 1;
    const b = 2;
    const esperado = 0.5;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;

    expect(dividirDoisNumeros(a, b)).toBe(esperado);
})