const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./constants.js');

let connection;

const message = 'Say: ';

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', data => {
        handleUserInput(data)
    });
    return stdin;
}

let command;


const handleUserInput = function(data) {
    const stdout = process.stdout;
    const interval = function(data) {
        command = setInterval(() => {
            connection.write(data)
        }, 100);
    };
    if (data === '\u0003') {
        stdout.write("Exiting game. Goodbye. \n");
        process.exit()
    }
    if (data === 'w') {
        clearInterval(command)
        interval(UPKEY)
    }
    if (data === 'a') {
        clearInterval(command)
        interval(LEFTKEY)
    }
    if (data === 's') {
        clearInterval(command)
        interval(DOWNKEY)
    }
    if (data === 'd') {
        clearInterval(command)
        interval(RIGHTKEY)
    }
    if (data === "h"){
        connection.write(message)
    }
}


module.exports = { setupInput }