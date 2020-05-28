//Lab 07: House Points Game Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    app.get('/points', function(req, res){
        res.render('points')
    });
}