const mySql=require('mysql');
const pool=mySql.createPool({ host:'localhost',
                              user: 'root',
                              database: 'nodecomplete',
                              password: 'Nethra@1'

});

module.exports=pool.promise();