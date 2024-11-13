const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste',
    port: 3307,
    connectionLimit: 3 
});


pool.getConnection()
    .then(conn => {
        console.log('Conectado ao banco de dados');
        conn.release(); 
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    });

module.exports = pool;

