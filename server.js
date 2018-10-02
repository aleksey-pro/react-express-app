const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 5000;

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users_list';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
});
connection.connect(err => {
  if (err) {
    return err;
  }
});

app.get('/api/customers', (req, res) => {
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
