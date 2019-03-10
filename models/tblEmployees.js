const  Sequelize = require('sequelize');
const  db = require('../confing/database');

const  Emp = db.define('tblEmployees',{


    empID:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    empName:{
        type:Sequelize.STRING
    },
    empActive:{
        type:Sequelize.STRING
    },
    emp_dpID:{
        type:Sequelize.INTEGER
    },


});
module.exports = Emp;
