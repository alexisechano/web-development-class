//Index for Controllers
//Alexis Echano, 2020

var main_page = require('./main_page_init.js')
var facts_lab = require('./lab_01_facts.js');
var fun_lab = require('./lab_02_fun.js');
var weather_lab = require('./lab_03_weather.js');
var form_lab = require('./lab_04_form.js');
var voter_lab = require('./lab_05_voter.js');

module.exports.do_setup = function(app){
    
    main_page.run_setup(app);
    facts_lab.run_setup(app);
    fun_lab.run_setup(app);
    weather_lab.run_setup(app);
    form_lab.run_setup(app);
    voter_lab.run_setup(app);
    
}