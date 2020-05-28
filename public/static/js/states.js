//needed global variables
var tracker = 1;    //for the dialogue box
        
var disasters = ["Tornado", "Freak Hurricane", "Car stolen", "Luggage fell off the car", "Weird uncle invites you over"];
var stateCodes = {
            "AL": "Alabama",
            "AK": "Alaska",
            "AZ": "Arizona",
            "AR": "Arkansas",
            "CA": "California",
            "CO": "Colorado",
            "CT": "Connecticut",
            "DE": "Delaware",
            "DC": "District Of Columbia",
            "FL": "Florida",
            "GA": "Georgia",
            "GU": "Guam",
            "HI": "Hawaii",
            "ID": "Idaho",
            "IL": "Illinois",
            "IN": "Indiana",
            "IA": "Iowa",
            "KS": "Kansas",
            "KY": "Kentucky",
            "LA": "Louisiana",
            "ME": "Maine",
            "MD": "Maryland",
            "MA": "Massachusetts",
            "MI": "Michigan",
            "MN": "Minnesota",
            "MS": "Mississippi",
            "MO": "Missouri",
            "MT": "Montana",
            "NE": "Nebraska",
            "NV": "Nevada",
            "NH": "New Hampshire",
            "NJ": "New Jersey",
            "NM": "New Mexico",
            "NY": "New York",
            "NC": "North Carolina",
            "ND": "North Dakota",
            "OH": "Ohio",
            "OK": "Oklahoma",
            "OR": "Oregon",
            "PA": "Pennsylvania",
            "RI": "Rhode Island",
            "SC": "South Carolina",
            "SD": "South Dakota",
            "TN": "Tennessee",
            "TX": "Texas",
            "UT": "Utah",
            "VT": "Vermont",
            "VA": "Virginia",
            "WA": "Washington",
            "WV": "West Virginia",
            "WI": "Wisconsin",
            "WY": "Wyoming"
        };
    
var borders = {
            "AL": ["MS","TN","GA","FL"],
            "AK": ["WA"],
            "AZ": ["CA","NV",'UT',"CO","NM"],
            "AR": ['OK','MO','TN','MS','LA'],
            "CA": ['OR','NV','AZ'],
            "CO": ['WY','NE','KS','OK','NM','AZ','UT'],
            "CT": ['NY','MA','RI'],
            "DE": ['MD','PA','NJ'],
            "DC": ['VA','MD'],
            "FL": ['AL','GA'],
            "GA": ['FL','AL','TN','NC','SC'],
            "HI": [""],
            "ID": ['OR','WA','MT','WY','UT','NV'],
            "IL": ['WI','IN','KY','MO','IA'],
            "IN": ['IL','MI','OH','KY'],
            "IA": ['SD','MN','WI','IL','MO','NE'],
            "KS": ['NE','MO','OK','CO'],
            "KY": ['IN','OH','WV','VA','TN','MO','IL'],
            "LA": ['TX','AR','MS'],
            "ME": ['NH'],
            "MD": ['VA','WV','PA','DC','DE'],
            "MA": ['RI','CT','NY','NH','VT'],
            "MI": ['WI','IN','OH'],
            "MN": ['WI','IA','SD','ND'],
            "MS": ['LA','AR','TN','AL'],
            "MO": ['KS','NE','IA','IL','KY','TN','AR','OK'],
            "MT": ['ND','SD','WY','ID'],
            "NE": ['SD','IA','MO','KS','CO','WY'],
            "NV": ['ID','UT','AZ','CA','OR'],
            "NH": ['VT','ME','MA'],
            "NJ": ['DE','PA','NY'],
            "NM": ['AZ','UT','CO','OK','TX'],
            "NY": ['NJ','PA','VT','MA','CT'],
            "NC": ['VA','TN','GA','SC'],
            "ND": ['MN','SD','MT'],
            "OH": ['PA','WV','KY','IN','MI'],
            "OK": ['KS','MO','AR','TX','NM','CO'],
            "OR": ['CA','NV','ID','WA'],
            "PA": ['NY','NJ','DE','MD','WV','OH'],
            "RI": ['CT','MA'],
            "SC": ['GA','NC'],
            "SD": ['ND','MN','IA','NE','WY','MT'],
            "TN": ['KY','VA','NC','GA','AL','MS','AR','MO'],
            "TX": ['NM','OK','AR','LA'],
            "UT": ['ID','WY','CO','NM','AZ','NV'],
            "VT": ['NY','NH','MA'],
            "VA": ['NC','TN','KY','WV','MD','DC'],
            "WA": ['ID','OR'],
            "WV": ['OH','PA','MD','VA','KY'],
            "WI": ['MI','MN','IA','IL'],
            "WY": ['MT','SD','NE','CO','UT','ID']
        };
var clueMap = {
            "AL": ["test"],
            "AK": ["test"],
            "AZ": ["test"],
            "AR": ["test"],
            "CA": ["test"],
            "CO": ["test"],
            "CT": ["test"],
            "DE": ["test"],
            "DC": ["test"],
            "FL": ["test"],
            "GA": ["test"],
            "HI": [""],
            "ID": ["test"],
            "IL": ["test"],
            "IN": ["test"],
            "IA": ["test"],
            "KS": ["test"],
            "KY": ["Capital is Frankfort", "__ Fried Chicken", "Has a college mascot called the Wildcats"],
            "LA": ["test"],
            "ME": ["test"],
            "MD": ["test"],
            "MA": ["test"],
            "MI": ["test"],
            "MN": ["test"],
            "MS": ['LA','AR','TN','AL'],
            "MO": ['KS','NE','IA','IL','KY','TN','AR','OK'],
            "MT": ['ND','SD','WY','ID'],
            "NE": ['SD','IA','MO','KS','CO','WY'],
            "NV": ['ID','UT','AZ','CA','OR'],
            "NH": ['VT','ME','MA'],
            "NJ": ['DE','PA','NY'],
            "NM": ['AZ','UT','CO','OK','TX'],
            "NY": ['NJ','PA','VT','MA','CT'],
            "NC": ['VA','TN','GA','SC'],
            "ND": ['MN','SD','MT'],
            "OH": ['PA','WV','KY','IN','MI'],
            "OK": ['KS','MO','AR','TX','NM','CO'],
            "OR": ['CA','NV','ID','WA'],
            "PA": ['NY','NJ','DE','MD','WV','OH'],
            "RI": ['CT','MA'],
            "SC": ['GA','NC'],
            "SD": ['ND','MN','IA','NE','WY','MT'],
            "TN": ['KY','VA','NC','GA','AL','MS','AR','MO'],
            "TX": ['NM','OK','AR','LA'],
            "UT": ['ID','WY','CO','NM','AZ','NV'],
            "VT": ['NY','NH','MA'],
            "VA": ['NC','TN','KY','WV','MD','DC'],
            "WA": ['ID','OR'],
            "WV": ['OH','PA','MD','VA','KY'],
            "WI": ['MI','MN','IA','IL'],
            "WY": ['MT','SD','NE','CO','UT','ID']
        };
        
        //set up!
        var svg = document.getElementById('svg_id');
        // get the group of states elements. 
        var all_states = document.getElementById('all_states');
        
        //get submit button info
        var submitButton = document.getElementById('submit-button');
        
        
        //creates game object
        var game = {
            game_start: false,
            game_end: false,
            state_track : 1,
            current_state: "IL",
            correct_state: "",
            current_state_set_index: [],
            current_state_set: [],
            curr_state_adjs: [],
            start_game : function() {
                this.game_start = true;
                document.getElementById("state-tracker").innerHTML = this.state_track; 
                //start timer!
            },
            end_check : function() {
                return this.game_end;
            },
            end_game : function() {
                this.game_end = true;
            },
            nextState: function(curr_state_code) { //just sets up everythinnig
                document.getElementById("state-tracker").innerHTML = this.state_track; 
                var current_state_color = document.getElementById(curr_state_code);
                current_state_color.style.fill = "#800080";
 
                this.curr_state_adjs = borders[curr_state_code]; //gets state's adjacent states
                //fills in states around current one
                for(var a = 0; a < this.curr_state_adjs.length; a++)
                {
                    var span_state = document.getElementById(this.curr_state_adjs[a]);
                    span_state.style.fill = "#AC4772";
                }
                return this.curr_state_adjs;
            },
            generateClue : function(curr_adjacents) {  //next step is to randomly generate correct state, using adjs
                var indexAdj = Math.round(Math.random() * curr_adjacents.length);
                this.correct_state = curr_adjacents[indexAdj];
                var clueList = clueMap[this.correct_state];
                console.log("STATE AND CLUES:" + this.correct_state + clueList);
                var rand = Math.round(Math.random() * clueList.length);
                var clue = clueList[rand];
                return clue;
                
            },
            showClue : function(clue){
                document.getElementById("diag-id-mesg").innerHTML = clue;
            },
            checkCorrectAns : function(ans) {   //checks the above answer or the 'clicked'
                if(ans == 'CA'){
                    this.game_end = true;    //check
                }
                return this.correct_state == ans;
            },
            endTurn : function() {   //checks the above answer or the 'clicked'
                //resets fills
                all_states.style.fill = "#D3D3D3";
                this.current_state = this.correct_state;
            },
            incStateTrack : function() {   
                this.state_track += 1;
            },
            getStateTrack : function() {   
               return this.state_track;
            },
            getCurrent : function() {   
               return this.current_state;
            },
            timeTurn: function(){
                var timeleft = 10;
                var downloadTimer = setInterval(function(){
                    if(timeleft <= 0){
                        clearInterval(downloadTimer);
                        document.getElementById("sw-clock").innerHTML = "00:00";
                    }
                    else if(timeleft == 10){
                        document.getElementById("sw-clock").innerHTML = "00:" + timeleft;
                    }
                    else {
                        document.getElementById("sw-clock").innerHTML = "00:0" + timeleft;
                        }
                    timeleft -= 1;
                    }, 1000);
            }
        };
        
        $('.modal-game-starter').hide(0);
        $('.play-butt').click(function(){
            tracker = 1;
            $('.modal-game-starter').show(0);
            $('.msg-4').hide(0);
            $('.msg-3').hide(0);
            $('.msg-2').hide(0);
            $('.msg-1').show(0);
           // $('.modal-game-starter').fadeIn(300);
            
        });
        document.getElementById("title-img").onclick = function () {
            location.href = "https://en.wikipedia.org/wiki/National_Lampoon%27s_Vacation";
        };
        
        //I don't know where to put this!
        var clicked_state = '';
        all_states.onclick = function(ev) {     //PROBLEMS, if no timer, it auto stops HERE!!!!!!!
                        
            clicked_state = ev.target;
        };
        
        function playGame(){    //change to submit button?
            game.start_game();    //begins game
            
            
            console.log("starting game now!");
            
            while(game.end_check() === false){
                    var where_am_i = game.getCurrent();     //gets current state
                    console.log(where_am_i);    //prints to log
                    
                    var adjac_states = game.nextState(where_am_i);  //these next two lines pick the next state and clue
                    var theClue = game.generateClue(adjac_states);   
                    game.showClue(theClue);
                    
                    /*
                    
                    timer and and clicking here!
                    
                    */

                    game.timeTurn();
                     
                    //checks if click is correct  
                        if(game.checkCorrectAns(clicked_state)){
                            setInterval(function(){
                                document.getElementById("diag-id-mesg").innerHTML = "CORRECT!";
                                }, 1500);
                            
                        }
                        
                    //if incorrect...end game
                        else{
                            game.end_game();
                        }
                        
                        //increments
                        game.incStateTrack();
                        document.getElementById("state-tracker").innerHTML = game.getStateTrack(); 
                        
                        //updates, checks if you are in California yet!
                        
                        //THIS IS WHERE IT SKIPS TO WITHOUT TIMEOUTS!
                        game.endTurn();
                        console.log("TURN FINISHED!");
            
            }
            
        }

        $('.diag-cont-butt').click(function(){
            
            if(tracker == 1){
                $('.msg-1').hide(0);
                $('.msg-2').show(0);  
                tracker++;
            }
            else if(tracker == 2){
                $('.msg-2').hide(0);
                $('.msg-3').show(0);  
                tracker++;
            }
            else if(tracker == 3){
                $('.msg-3').hide(0);
                $('.msg-4').show(0);  
                tracker++;
            }
            else if(tracker == 4){  //PLAY GAME NOW!
                $('.modal-game-starter').hide(0);
                playGame();

            }

        });