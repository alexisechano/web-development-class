//Lab 04: (Pet) Form Lab
//Alexis Echano, 2020

module.exports.run_setup = function(app){
    app.get('/formz', function(req, res){
        res.render('form');
    });

    app.get('/genform', function(req, res){ //color=&&name=&&type=&&charac=
        var get_color = req.query.color;
        var get_name = req.query.name;
        var get_type = req.query.type;
        var get_charac = req.query.charac;
        var img_link = "";
        
        if(get_color == "brown"){
            img_link = "https://cdn.clipart.email/14910cd35a95f7ad2b271e32002cabd3_corgi-clipart-cute-pet-corgi-cute-pet-transparent-free-for-_920-889.jpeg";
        }
        else if(get_color == "silver"){
            img_link ="https://noellembrooks.com/wp-content/uploads/2015/08/piebald-colored-red-fox1.png";
        }
        else if(get_color == "red"){
            img_link = "https://cdn.clipart.email/a349e9915e36193c363d6630b3f1ad83_28-collection-of-animal-jam-otter-drawing-high-quality-free-_257-291.png";
        }
        var feed_dict = {'name':get_name, 'color':get_color, 'type':get_type, 'charac':get_charac, 'type-img':img_link};
        res.render('formgener', feed_dict);
    });
}