const calculadora = require('../src/calculadora');

//Importa a massa
const massa = require('../massa')

//Soma
test.each(massa.array.map(elemento => [
    elemento.a, 
    elemento.b, 
    elemento.esperadoSoma]))
    ('somar %f + %f com massa', (a, b, esperado) => {

    const somarDoisNumeros = calculadora.somarDoisNumeros;

    const obtido = somarDoisNumeros(a, b);

    expect(obtido).toBe(esperado);
});

//Subtração
test.each(massa.array.map(elemento => [
    elemento.a, 
    elemento.b, 
    elemento.esperadoSubtracao]))
    ('subtrair %f + %f com massa', (a, b, esperado) => {

    const obtido = calculadora.subtrairDoisNumeros(a, b);

    expect(obtido).toBe(esperado);
});

//Subtração
test.each(massa.array.map(elemento => [
    elemento.a, 
    elemento.b, 
    elemento.esperadoMultiplicacao]))
    ('somar %f + %f com massa', (a, b, esperado) => {

    expect(calculadora.multiplicarDoisNumeros(a, b)).toBe(esperado);
});

//Divisão
test.each(massa.array.map(elemento => [
    elemento.a,
    elemento.b,
    elemento.esperadoDivisao]))
    ('dividir %f / %f com massa', (a, b, esperado) => {
    expect(calculadora.dividirDoisNumeros(a, b)).toBe(esperado);
}); 
