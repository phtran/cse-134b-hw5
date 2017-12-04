
if (!teams || teams===null){
    var teams = [];
}


if (!users || users===null){
    var users = [];
    addUser ("admin", "admin", "admin", "admin", "parent", "My Team");
}

var currentUser = null;
var currentTeam = null;