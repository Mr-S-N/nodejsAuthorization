const Sequelize = require('sequelize');
module.exports= new Sequelize('task110319', 'root', 'soomt54032@13', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});
