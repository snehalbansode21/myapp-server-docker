const mysql = require("mysql")

function connect() {
    const connection = mysql.createConnection({
        host:'172.18.4.221',
        user:'root',
        password:'root',
        database:'myapp_db',
        port:9090
    })

    connection.connect();
    return connection;
} 

module.exports = {
    connect: connect
}
