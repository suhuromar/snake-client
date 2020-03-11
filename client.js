const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
    const conn = net.createConnection({ 
        host: 'localhost',
        port: 50541   
});
    conn.on("data", (data) => {
        console.log(data)
    })

    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        conn.write("Name: SNK")

        // conn.write("Move: up")
        // setTimeout(() => {
        //     conn.write("Move: up"); 
        // }, 300)
    })
  // interpret incoming data as text
conn.setEncoding('utf8'); 

return conn;
}

console.log('Connecting ...');
connect();