const mongo = require("mongoose");
mongo.connect("mongodb://mongo:QgkUbuz5lUhquoFg9g7U@containers-us-west-188.railway.app:6585")
const connect = mongo.connection
connect.on("error",function(err){console.log("error connecting to database !!",err)})
connect.once("open",function(){
    console.log("successfully connected to the Database !!")
})
// hellow orldsa


module.exports=mongo