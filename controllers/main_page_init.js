//Main Page Initialization
//Alexis Echano, 2020

module.exports.run_setup = function(app){

    app.get('/', function(req, res){
        console.log("MAIN LANDING PAGE")
        res.render('index');
    });
}