//Lab 06: Map Game Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    app.get('/mapgame', function(req, res){
        res.render('map_game')
    });
}