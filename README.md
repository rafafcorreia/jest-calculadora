# Guia Rápido para criar um projeto semelhante

1. Inicializar o projeto: `npm init -y`

2. Com um terminal em modo administrador, rode o comando: `npm install --save-dev jest`

3. Adicione esse bloco dentro do package.json:

```
  "scripts": {
    "test": "jest"
  }
```

4. Para rodar os testes criados, utilize o comando: `npm run test`
