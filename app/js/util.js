var users = JSON.parse(sessionStorage.getItem("users"));
var teams = JSON.parse(sessionStorage.getItem("teams"));
var currentTeam = JSON.parse(sessionStorage.getItem("currentTeam"));

// Functions are not parsed so we have to define them again
if (currentTeam){
    currentTeam.addPlayer = function (image, fName, lName, email, dBirth, number, position, isCaptain){
        this.players [this.players.length] = new Player (image, fName, lName, email, dBirth, number, position, isCaptain);
    }
    
    currentTeam.deletePlayer = function (number){
        for (var i=0; i<this.players.length; i++){
            if (this.players[i].number == number){
                this.players.splice(i,1);
                break;
            }
        }
    }
    
    currentTeam.addMatch = function (opponent, date, location, status, stats){
        id = this.matches.length;
        this.matches [this.matches.length] = new Match (id, opponent, date, location, status, stats);
    }
    
    currentTeam.deleteMatch = function (id){
        for (var i=0; i<this.matches.length; i++){
            if (this.matches[i].id == id){
                this.matches.splice(i,1);
                break;
            }
        }
    }
    
}


var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

function User (username, fName, lName, pass, type, teamName){
    this.username = username;
    this.fName = fName;
    this.lName = lName;
    this.pass = pass;
    this.type = type;
    this.teamName = teamName;
    
    let teamExists = false;
    
    for (var i=0; i<teams.length; i++) {
        if (teamName == teams[i].teamName){
            teamExists = true;
            break;
        }    
    }
    
    if (!teamExists) {
        teams [teams.length] = new Team (teamName);
        
        var myTeam = teams [teams.length-1];

        myTeam.addPlayer ("../img/profile.png", "Pablo", "Canas", "pablo@gmail.com", "1997-04-24", 1, "Forward", false);
        myTeam.addPlayer ("../img/profile.png", "Peter", "Tran", "peter@gmail.com", "1997-04-24", 2, "Goalkeeper", false);
        myTeam.addPlayer ("../img/profile.png", "Andrew", "Yoo", "andrew@gmail.com", "1997-04-24", 3, "Defender", false);
        myTeam.addPlayer ("../img/profile.png", "Alex", "Smith", "alex@gmail.com", "1997-04-24", 4, "Midfielder", true);
        myTeam.addPlayer ("../img/profile.png", "Tim", "Jobs", "tim@gmail.com", "1997-04-24", 5, "Forward", false);
        myTeam.addPlayer ("../img/profile.png", "Robert", "John", "robert@gmail.com", "1997-04-24", 6, "Forward", false);
        myTeam.addPlayer ("../img/profile.png", "Kim", "Khan", "kim@gmail.com", "1997-04-24", 7, "Defender", false);
        myTeam.addPlayer ("../img/profile.png", "Bart", "Simpson", "bart@gmail.com", "1997-04-24", 8, "Defender", false);
        myTeam.addPlayer ("../img/profile.png", "Ralph", "Wiggum", "ralph@gmail.com", "1997-04-24", 9, "Midfielder", false);
        
        
        var stats = {
            results0: 2,
            results1:  1,
            foul0: 1,
            foul1: 2,
            redCards0: 0,
            redCards1: 1,
            yellowCards0: 1,
            yellowCards1: 2,
            shotsOnGoal0: 3,
            shotsOnGoal1: 1,
            goals0: 2,
            goals1: 1,
            cornerKicks0: 1,
            cornerKicks1: 2,
            goalKicks0: 4,
            goalKicks1: 8
        };
        
        var stats2 = {
            results0: 0,
            results1:  0,
            foul0: 0,
            foul1: 0,
            redCards0: 0,
            redCards1: 0,
            yellowCards0: 0,
            yellowCards1: 0,
            shotsOnGoal0: 0,
            shotsOnGoal1: 0,
            goals0: 0,
            goals1: 0,
            cornerKicks0: 0,
            cornerKicks1: 0,
            goalKicks0: 0,
            goalKicks1: 0
        };
        
        
        myTeam.addMatch ("Machester", new Date("2017-11-29T00:00:00") ,"San Diego Petco Park", "home", stats2);                
        myTeam.addMatch ("FC Tijuana", new Date("2017-11-11T00:00:00") ,"San Diego Petco Park", "home", stats);       
        myTeam.addMatch ("La Bellota FC",  new Date(),"San Diego Petco Park", "away", stats2);       
        myTeam.addMatch ("Real San Diego", new Date("2017-12-24T00:00:00") ,"San Diego Petco Park", "home", stats2);
        myTeam.addMatch ("Atletico de Balboa", new Date("2017-12-01T00:00:00") ,"San Diego Petco Park", "away", stats2);
    }
    
}

function Team (teamName){
    this.teamName = teamName;
    
    this.currentPlayer = null;
    this.currentMatch = null;
    
    this.players = [];
    this.matches = [];
    
    this.addPlayer = function (image, fName, lName, email, dBirth, number, position, isCaptain){
        this.players [this.players.length] = new Player (image, fName, lName, email, dBirth, number, position, isCaptain);
    }
    
    this.deletePlayer = function (number){
        for (var i=0; i<this.players.length; i++){
            if (this.players[i].number == number){
                this.players.splice(i,1);
                break;
            }
        }
    }
    
    this.addMatch = function (opponent, date, location, status, stats){
        id = this.matches.length;
        this.matches [this.matches.length] = new Match (id, opponent, date, location, status, stats);
    }
    
    this.deleteMatch = function (id){
        for (var i=0; i<this.matches.length; i++){
            if (this.matches[i].id == id){
                this.matches.splice(i,1);
                break;
            }
        }
    }
}

function Match (id, opponent, date, location, status, stats) {
    this.id = id;
    this.opponent = opponent;
    this.date = Date.parse(date);
    this.location = location;
    this.status = status;
    this.stats = stats;
}

function Player (image, fName, lName, email, dBirth, number, position, isCaptain) {
    this.image = image;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.dBirth = dBirth;
    this.number = number;
    this.position = position;
    this.isCaptain = isCaptain;
    this.fouls = 0;
    this.redCards = 0;
    this.yellowCards = 0;
    this.shotsOnGoal = 0;
    this.goals = 0;
    this.assists = 0;
    this.cornerKicks = 0;
    this.penaltyKicks = 0;
    this.throwIn = 0;
    this.appearances = 0;
    
}

function addUser (username, fName, lName, pass, type, teamName){
    users [users.length] = new User (username, fName, lName, pass, type, teamName);  
}
