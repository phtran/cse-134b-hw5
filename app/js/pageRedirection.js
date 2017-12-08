function goToPage (url) {
    saveData();
    window.location.assign(url);
}

function saveData () {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
    sessionStorage.setItem('currentMatch', JSON.stringify(currentMatch));
    
}