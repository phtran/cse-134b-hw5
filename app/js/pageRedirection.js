function goToPage (url) {
    saveData();
    window.location.assign(url);
}

function saveData () {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
    localStorage.setItem('currentMatch', JSON.stringify(currentMatch));
    
}