const Sequelize = require("sequelize")
const db = require('../database/db')


module.exports = db.sequelize.define(
    'events', {
        id:{
            type:Sequelize.STRING,
            primaryKey:true,
        },
        
        title:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        },
        stream:{
            type:Sequelize.STRING
        },
    
    },
    {
        timestamps:false
    }
)



