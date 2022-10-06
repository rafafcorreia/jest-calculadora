const calculadora = require('../src/calculadora');

let massaDivisao = [
    [3, 2, 1.5],
    [3, 0, Infinity]
];

test('somar %f + %f', () => {
    // Prepara / Configura
    const a = 2;
    const b = 3;
    const esperado = 5;
    const somarDoisNumeros = calculadora.somarDoisNumeros;

    // Executa
    const obtido = somarDoisNumeros(a, b);

    // Valida
    expect(somarDoisNumeros(a, b)).toBe(esperado);
});

test('subtrair 1 - 2', () => {
    //Prepara / Configura
    const a = 2;
    const b = 3;
    const esperado = -1;

    //Executa
    const obtido = calculadora.subtrairDoisNumeros(a, b);

    //Valida
    expect(obtido).toBe(esperado);
});

test('multiplicar 1 * 2', () => {
    const a = 2;
    const b = 3;
    const esperado = 6;

    expect(calculadora.multiplicarDoisNumeros(a, b)).toBe(esperado);
});

test.each(massaDivisao)('dividir %f / %f', (a, b, esperado) => {
    expect(calculadora.dividirDoisNumeros(a, b)).toBe(esperado);
})
