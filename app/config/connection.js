//call mysql
var mysql = require("mysql");

//require sequelize
//first give name of the database which is Burgers, the username (which is root), and the password (which is password)
var sequelize = new Sequelize("Burgers", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

//Export the connection 
module.exports = sequelize