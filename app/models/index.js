const dbconfig=require("../config/db.config.js");

const Sequelize = require('sequelize');

const sequelize=new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{

    Host:dbconfig.Host,
    dialect:dbconfig.dialect,
    operatorsAliases:false,
    pool:{
        max:dbconfig.max,
        min:dbconfig.min,
        acquire:dbconfig.acquire,
        idle:dbconfig.ildle,
    },

});


const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.movies=require("./movie.model.js")(sequelize,Sequelize);
db.comments=require("./comment.model.js")(sequelize,Sequelize);

db.movies.hasMany(db.comments,{as :"comments"});
db.comments.belongsTo(db.movies,{
    foreignKey:"movieId",
    as:"movie"

});

module.exports=db;

