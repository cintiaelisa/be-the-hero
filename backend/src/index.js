const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 *  rota / recurso
 * 
 * Métodos HTTP:
 * GET
 * POST
 * PUT
 * DELETE
 */

 /**
  * Tipos de parâmetros HTTP
  * Query: Parâmetros enviados/ nomeados na rota
  * Route Params: 
  * Body request:
  */



