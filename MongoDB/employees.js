import client from "./connection.js"

client.connect(function(err,db){
    

    if(err){
        throw err;
    }
    db.createCollection("employees",function(err,res){
        if(err){
            throw err;
        }
    
    console.log("collections are created!");

    client.close();


});

});

