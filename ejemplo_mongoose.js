'use strict'

var mongoose=require('mongoose');

var db = mongoose.createConnection( 'mongodb://localhost:27017/prueba' );
var postSchema = mongoose.Schema({
    titulo: { type : String, trim : true, index : true },
    post : {type: String},
    slug : {type: String},
    autor : { type : mongoose.Schema.Types.ObjectId, ref : 'users' }  });
var userSchema = mongoose.Schema({
    name : { type : String, trim : true },
    nick : { type : String, trim : true, index : true },
    email: { type : String, trim : true },
});
 var Post = db.model('posts', postSchema);
 var User = db.model('users', userSchema);

 // var PrimerUsuario =  new User({
//     name : 'Pepito Perez',
//     nick : 'pepito',
//     email: 'pepito@pepito.com'
// });
// PrimerUsuario.save(function(err, doc){
//    if(err)
//       console.log(err);
//    var PrimerPost = new Post({
//        titulo: 'Este es mi primer Post!',
//        post  : 'Publicando mi primer post!! que felicidad!!',
//        autor : doc._id,
//    });
   
//    PrimerPost.save( function(err, doc){
//      console.log(err);
//      console.log(doc);
//    })
// Post.find().populate('autor').exec(function(err, doc){
//     console.log(err);
//     console.log(doc);
//  });