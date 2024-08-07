const logout = async() => {
    const response = await fetch('/api/userRoutes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logoutbtn').addEventListener('click', logout);