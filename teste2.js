var data =  require("./fakeData");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;
    
    var newUser = {
        id: data.length + 1,
        name,
        job,
    }

    data.push(newUser)
    
    res.send(newUser);

};