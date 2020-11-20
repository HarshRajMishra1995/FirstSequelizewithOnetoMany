module.exports=(sequelize,DataTypes)=>{

    const Movie=sequelize.define("movie",{
    
        title:{
            type:DataTypes.STRING
        },
        Description:{
            type:DataTypes.STRING
        }


    });
    return Movie;

};