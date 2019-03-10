const  Sequelize = require('sequelize');
const  db = require('../confing/database');

const  Dep = db.define('tbldepartments',{

    dpID:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    dpName:{
        type:Sequelize.STRING
    },


});
module.exports = Dep;
