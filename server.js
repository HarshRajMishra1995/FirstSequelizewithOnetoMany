//const { json } = require("sequelize/types");
const db= require("./app/models");
const controller=require("./app/controller/movie.controller");

const run=async()=>{

    //creating movie

    const mov1=await controller.createMovie({
        title:"harry potter",
        Description:"magic movie"
    });

    const mov2=await controller.createMovie({
        title:"jurassic park",
        Description:"adventure movie"
    });

    const mov3 =  await controller.createMovie({
        title:"social network",
        Description:"tech movie"
    });

    //creating comments for the comments

    const comment1=await controller.createComment(mov1.id,{
        name:"Harsh raj Mishra",
        text:"nice movie for magic "
    });

    const comment2=await controller.createComment(mov2.id,{
        name:"deepti",
        text:"nice experience"
    });

    const comment3=await controller.createComment(mov3.id,{
        name:"saketh",
        text:"good movie"
    })

    //get movie by given id
   const mov1data=await controller.findMovieById(mov1.id);
   console.log("movie id "+mov1.id,
   JSON.stringify(mov1data,null,2));

   const mov2data=await controller.findMovieById(mov2.id);
   console.log("movie id "+mov2.id,
   JSON.stringify(mov2data,null,2));

   const mov3data=await controller.findMovieById(mov3.id);
   console.log("movie id "+mov3.id,
   JSON.stringify(mov3data,null,2));


   //get comment by given id

   const com1data=await controller.findCommentById(comment1.id);
   console.log("comment id "+comment1.id,
   JSON.stringify(com1data,null,2));

   const com2data=await controller.findCommentById(comment2.id);
   console.log("comment id "+comment2.id,
   JSON.stringify(com2data,null,2));

   const com3data=await controller.findCommentById(comment3.id);
   console.log("comment id "+comment3.id,
   JSON.stringify(com3data,null,2));

   //get all the movies
   const movies=await controller.findAll();
   console.log("We get all the movies ",JSON.stringify(movies,null,2));


};

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
  });
db.sequelize.sync();

  


