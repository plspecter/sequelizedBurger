//sequelize model, its a representation of a table - creates the table
//we require sequelize
var Sequelize = require("sequelize");
var sequelize = require("../config/connection")

var Burgers = sequelize.define("tablename",  {
Title: {
    type:Sequelize.STRING //Column name is Title: then creates a variable in the table as a string
},
Devoured: {
    type:Sequelize.INTEGER //Column name is DevouredL creates a variable in the table as a number
}
})

//Creates the table
Burgers.sync({force: true}).then(function() {
    //table create
    return Burgers.create({
    Title: 'Veggie Burger', 'Whopper', 'Bacon King',
    Devoured: 0,
    });
})

//translates to SELECT * FROM (tablename)
Burgers.findAll({
where: {
    Title: {}
}
})

//Sync
Burgers.sync();

//