//Lab 01: Facts Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    
    app.get('/facts', function(req, res){
        res.render('facts');
    });
    
    app.get('/facts/:page', function(req, res){
        var feed_dict = {fact:"test"};
        
        var page = req.params.page
        var num_facts = req.query.num_facts;
        var json = req.query.json;
        
        if(page == 1)
        {
            if (num_facts == 1) 
            {
                feed_dict = {fact:["Did you know? One is the first number!"]};
            } 
            else if (num_facts == 2)
            {
                var facts_one = ["Did you know? One is the first number!", "One times any number is the number!"];
                feed_dict = {fact:facts_one};
            }
            
        }
        else if(page == 2)
        {
            if (num_facts == 1) 
            {
                feed_dict = {fact:["Did you know? Two is the second number!"]};
            } 
            else if (num_facts == 2)
            {
                var facts_two = ["Did you know? Two is the second number!", "Two times any number is double the number!"];
                feed_dict = {fact:facts_two};
            }
        }
        
        if('json' in req.query)
        {
            res.json(feed_dict);
        }
        else
        {
            res.render('facts', feed_dict);
        }
    });
}