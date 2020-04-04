const express= require('express');
const app = express();
const cors = require('cors');
const routes = require("./routes");
app.use(express.json());
app.use(routes);
app.use(cors());
/**
 * Métodos HTTP:
 * GET: buscar/listar dados do back-end
 * POST: criar informações no back-end
 * PUT: atualizar dados e cria caso não exista no back-end
 * DELETE: exclui dados do back-end
 */

/**
 * tipos de parametros:
 * Query Params: paramentros nomeados enviados na rota após '?' (filtros,paginações...)
 * Route Params: parâmetros usados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * BANCO DE DADOS
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*');
 */



app.listen(5000);
