function goToPage (url) {
    saveData();
    window.location.assign(url);
}

function saveData () {
    sessionStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('teams', JSON.stringify(teams));
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentTeam', JSON.stringify(currentTeam));
    
}