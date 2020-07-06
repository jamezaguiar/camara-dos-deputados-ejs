const { Router } = require('express');

const api = require('./helpers/api');

const routes = new Router();

routes.get('/', async (request, response) => {
  const { search } = request.query;

  const { data } = await api.get('/deputados', {
    params: {
      ordem: 'ASC',
      ordenarPor: 'nome',
      nome: search,
    }
  });

  return response.render('index', { deputados: data.dados });
});

routes.get('/info/:id', (request, response) => {
  const { id } = request.params;

  api.get(`/deputados/${id}`).then(({ data: { dados: { ultimoStatus }}}) => {
    return response.render('info', { deputado: ultimoStatus });
  });
});

module.exports = routes;