const db= require("../models");

const Movie=db.movies;
const Comment=db.comments;

//create and save new movies and new comments

exports.createMovie=(movie)=>{

    return Movie.create({
        title:movie.title,
        Description:movie.Description
    })
    .then((movie)=>{
       console.log("Movie is created :"+JSON.stringify(movie,null,4));
       return movie;
    })
    .catch((error)=>{
        console.log("Error while creating movie ",error);
    });
};

exports.createComment=(movieId,comment)=>{

    return Comment.create({
        name:comment.name,
        text:comment.text,
        movieId:movieId
    })
    .then((comment)=>{
        console.log("created comment",JSON.stringify(comment,null,4));
    })
    .catch((error)=>{
        console.log("error while creating comment ",error);
    })
};

//gets the movie for a movieId

exports.findMovieById = (movieId) => {
    return Movie.findByPk(movieId, { include: ["comments"] })
      .then((movie) => {
        return movie;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      });
  };


//finding the comments by comment id
exports.findCommentById=(commentId)=>{
    return Comment.findByPk(commentId,{include:["movie"]})
    .then((comments)=>{
        return comments;
    })
    .catch((error)=>{
        console.log("error while finding",error);
    })
}

//get all the movie include comments

exports.findAll = ()=>{

  return Movie.findAll({
      include:["comments"],
  })
  .then((movies)=>{
      return movies;
  })

};
