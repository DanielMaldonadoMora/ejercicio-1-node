const express = require('express');

const app = express();

const { db } = require('./utils/database');

const { usersRouter } = require('./routes/user.route');
const { repairsRouter } = require('./routes/repairs.route');

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

//autenticar conexion a db
db.authenticate()
  .then(() => {
    console.log('conection with database succesfull');
  })
  .catch(err => console.log(err));
// sincronizar modelos
db.sync()
  .then(() => {
    console.log('sync with models succesfull');
  })
  .catch(err => console.log(err));

//port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Express app server running on port: ${PORT}`);
});
