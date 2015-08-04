var cassandra = require('node-cassandra-cql');
var client = new cassandra.Client({hosts: ['127.0.0.1'], keyspace: 'eduskeyspace'});
client.connect(function (err){


});

client.execute("SELECT * FROM users_by_username", function (err, result){
    var user = result.rows[0];
    //The row is an Object with column names as property keys
    console.log("My username is %s and my email is %s", user.username, user.email);
});


