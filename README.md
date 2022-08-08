# Guia Rápido para criar um projeto semelhante

1. Com um terminal em modo administrador, rode o comando: `corepack enable`

2. Vá no seu projeto e utilize o comando: `yarn init -2`

3. Baixe o Jest utilizando o comando: `yarn add --dev jest`

4. Adicione esse bloco dentro do package.json:

```
  "scripts": {
    "test": "jest"
  }
```

5. Para rodar os testes criados, utilize o comando: `yarn test` 
