const express = require('express');
const app  = express();
const port = 3000;
const config = {
    host: 'mysql-database',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    res.send('<h1>Docker node</h1>');
});

app.get('/name', (req, res) => {
    const sql = `INSERT INTO cats(name) values('frajola')`;
    connection.query(sql);
    connection.end();
    res.send(`<h1>Name: frajola, register success `)
})

app.listen(port, () => {
    console.log(`Up in port: ${port}`);
});