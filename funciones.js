const mysql = require('mysql');

function insertarUsuario(nombre, apellido, correoElectronico) {
  const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: '',
    database: 'revistaurban'
  });

  conexion.connect(function(error) {
    if (error) throw error;

    const sql = 'INSERT INTO usuarios (nombre, apellido, correo_electronico) VALUES (?, ?, ?)';
    conexion.query(sql, [nombre, apellido, correoElectronico], function(error, result) {
      if (error) throw error;

      console.log('Usuario insertado con éxito');
    });

    conexion.end();
  });
}