const express = require('express');
const cardsRoute = require('./routes/cards');
const usersRoute = require('./routes/users');

const app = express();
app.use('/users', usersRoute);
app.use('/cards', cardsRoute);
app.get('/', (req, res) => {
  res.status(404);
  res.send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(3000);
