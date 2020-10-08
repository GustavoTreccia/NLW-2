import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());

app.use(express.json())

app.use(routes);

app.listen(3333);

//GPPD: Get, Post, Put, Delete
//Get: Busca
//Post: Cria
//Put: Modifica
//Delete: Deleta

//Corpo (Request Body): Dados para criação ou atualização de registro
//Route Params: Identificar qual recurso se quer atualizar ou deletar
//Query Params: Paginação, filtragem, ordenação, outros

//Sobre o knex:
//Normal: SELECT * FROM users;
//Knex: knex('users').select('*');