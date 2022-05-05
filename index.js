const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('appName', 'Servidor de prueba');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function () {
  console.log('Servidor web escuchando en el puerto 3000');
});

//metodo get para obtener el formulario de todos
app.get('/todos', (request, response) => {
  const data = [{ id: 1, title: 'Tarea 1', completed: false },
  { id: 2, title: 'Tarea 2', completed: false },
  { id: 3, title: 'Tarea 3', completed: false }];
  response.render('todos', { todos: data });
});

app.get('/datatodos', (request, response) => {
  response.send('Hello World');
});

app.post('/guardartodo', (request, response) => {
  console.log(request.body);
});