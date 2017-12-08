function goToPage (url) {
    saveData();
    window.location.assign(url);
}

function saveData () {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentTeam', JSON.stringify(currentTeam));
    
}