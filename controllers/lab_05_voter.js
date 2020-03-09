//Lab 05: Voter Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    app.get('/voter', function(req, res){
        res.render('voter');
    });
    
    var shows = {
        'parks': 10,
        'b99': 10,
        'office': 10
    }
    app.get('/get_vote', function(req, res){
        var choice = req.query.choice;
        shows[choice] = shows[choice] + 1;
        res.json({'parksvotes':shows['parks'], 'b99votes':shows['b99'], 'officevotes':shows['office']});
    });
}