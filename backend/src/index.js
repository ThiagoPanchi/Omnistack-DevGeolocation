const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://panchiniak00:panchiniak00@cluster0-ewgoo.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
// Query params: request.query (Filtros, Ordenação, paginação...  )
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-Relacional)

app.listen(3333);