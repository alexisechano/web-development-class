//Lab 02: Fun Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    app.get('/fun', function(req, res){
        res.render('fun')
    });
}