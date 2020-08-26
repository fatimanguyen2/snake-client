const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: FN')
    // conn.write('Move: up')
    // setInterval(() => {conn.write('Move: left')}, 50)
    // conn.write('Move: down')
    // conn.write('Move: left')
    // conn.write('Move: right')
    
  });
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = {connect};