const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: FN')
  });
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = {connect};