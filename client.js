const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */

const connect = function() {
    const conn = net.createConnection({ 
        host: IP,
        port: PORT   
    });
    conn.setEncoding('utf8'); 

    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        conn.write("Name: SNK")

        // conn.write("Move: up")
        // setTimeout(() => {
        //     conn.write("Move: up"); 
        // }, 300)
    })
  // interpret incoming data as text
    conn.on("data", (data) => {
        console.log(data)
    })

return conn;
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// const setupInput = function() {
//     const stdin = process.stdin;
//     stdin.setRawMode(true);
//     stdin.setEncoding('utf8');
//     stdin.resume();
//     stdin.on('data', data => {
//         handleUserInput(data)
//     });
//     return stdin;
// }

// const handleUserInput = function(data) {
//     if (data === '\u0003') {
//         stdout.write("Exiting game. Goodbye");
//         process.exit()
//     }
// }
// console.log('Connecting ...');
// connect();

module.exports = { connect }