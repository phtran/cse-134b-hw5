var currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
var currentMatch = JSON.parse(localStorage.getItem("currentMatch"));
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

function writeUserData(username, fName, lName, type, teamName) {
  firebase.database().ref('users/' + username).set({
    Name: fName+" "+lName,
    type : type,
    teamName: teamName
  });
}

function writeTeamData(teamName) {
    
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
        
    pushMatch (teamName, 0, "Machester", "December 29, 2017" ,"San Diego Petco Park", "home", stats2);                
    pushMatch (teamName, 1, "FC Tijuana", "November 11, 2017" ,"San Diego Petco Park", "home", stats);       
    pushMatch (teamName, 2, "La Bellota FC",  "December 8, 2017","San Diego Petco Park", "away", stats2);       
    pushMatch (teamName, 3, "Real San Diego", "December 24, 2017" ,"San Diego Petco Park", "home", stats2);
    pushMatch (teamName, 4, "Atletico de Balboa", "December 20, 2017" ,"San Diego Petco Park", "away", stats2);
        
    pushPlayer(teamName, "../img/profile.png", "Pablo", "Canas", "pablo@gmail.com", "1997-04-24", 1, "Forward", false);
    pushPlayer(teamName, "../img/profile.png", "Peter", "Tran", "peter@gmail.com", "1997-04-24", 2, "Goalkeeper", false);
    pushPlayer(teamName, "../img/profile.png", "Andrew", "Yoo", "andrew@gmail.com", "1997-04-24", 3, "Defender", false);
    pushPlayer(teamName, "../img/profile.png", "Alex", "Smith", "alex@gmail.com", "1997-04-24", 4, "Midfielder", true);
    pushPlayer(teamName, "../img/profile.png", "Tim", "Jobs", "tim@gmail.com", "1997-04-24", 5, "Forward", false);
    pushPlayer(teamName, "../img/profile.png", "Robert", "John", "robert@gmail.com", "1997-04-24", 6, "Forward", false);
    pushPlayer(teamName, "../img/profile.png", "Ralph", "Wiggum", "ralph@gmail.com", "1997-04-24", 9, "Midfielder", false);
}

function pushMatch (teamName, id, opponent, date, location, status, stats){
    firebase.database().ref('matches/' + teamName+"/"+id).set({
        id : id,
        opponent : opponent,
        date : date,
        location : location,
        status : status
    });
    firebase.database().ref('matches/' + teamName+"/stats/"+id).set({
        results0: stats.results0,
        results1:  stats.results1,
        foul0: stats.foul0,
        foul1: stats.foul1,
        redCards0: stats.redCards0,
        redCards1: stats.redCards1,
        yellowCards0: stats.yellowCards0,
        yellowCards1: stats.yellowCards1,
        shotsOnGoal0: stats.shotsOnGoal0,
        shotsOnGoal1: stats.shotsOnGoal1,
        goals0: stats.goals0,
        goals1: stats.goals1,
        cornerKicks0: stats.cornerKicks0,
        cornerKicks1: stats.cornerKicks1,
        goalKicks0: stats.goalKicks0,
        goalKicks1: stats.goalKicks1
    });
}

function pushPlayer (teamName, image, fName, lName, email, dBirth, number, position, isCaptain){
    firebase.database().ref('players/' + teamName+"/"+number).set({
        image : image,
        fName : fName,
        lName : lName,
        email : email,
        dBirth : dBirth,
        number : number,
        position : position,
        isCaptain : isCaptain,
        fouls : 0,
        redCards : 0,
        yellowCards : 0,
        shotsOnGoal : 0,
        goals : 0,
        assists : 0,
        cornerKicks : 0,
        penaltyKicks : 0,
        throwIn : 0,
        appearances : 0
    });
}