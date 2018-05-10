function isLoggedIn(token){
    // The user is logged in if their token isn't expired
    return jwt_decode(token).exp > Date.now() / 1000;
}

function logout() {
    // Remove the idToken from storage
    localStorage.clear();
    main();
}