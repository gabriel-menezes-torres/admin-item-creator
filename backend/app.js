const express = require('express');

const app = express();
const port = 3001; // Porta em que o servidor irá escutar

// Rota padrão (rota raiz)
app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é o meu servidor Express.');
});

// Outra rota de exemplo
app.get('/about', (req, res) => {
  res.send('Esta é a página Sobre.');
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});