const express = require('express');

const app = express();
const port = 3001;


app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é o meu servidor Express.');
});

app.get('/about', (req, res) => {
  res.send('Esta é a página Sobre.');
});


app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});