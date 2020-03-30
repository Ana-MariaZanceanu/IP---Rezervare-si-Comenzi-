const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/demo", function(err, database){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("connected successfully");
    var obj = [{
        _id: 4,
        name: 'Andra Simion',
        age: 20,
        sign: 'Leo',
        favoriteFood: 'Pizza'
    },{
        _id: 5,
        name: 'Ivo Simion',
        age: 10,
        sign: 'Scorpio',
        favoriteFood: 'Not Pizza'
    }]
    database.collection("Clients").insertMany(obj, function(err, res){
        if(err){
            console.log(err);
        } else {
            console.log(res);
            console.log("document inserted successfully");
        }
    });
    database.close();
})