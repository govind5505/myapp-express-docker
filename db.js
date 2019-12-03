const mysql=require('mysql')
function connect(){
    const connection=mysql.createConnection({
        host:'172.18.0.147',
        user:'root',
        password:'root',
        database:'mean_db',
        port:9899
    })
    connection.connect()
    return connection
}
module.exports={
    connect:connect
}