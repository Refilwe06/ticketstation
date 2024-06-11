document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const homepage = document.getElementById('homepage');
    const logoutButton = document.getElementById('logoutButton');

    function showPage(pageId) {
        document.getElementById('registration').classList.add('hidden');
        document.getElementById('login').classList.add('hidden');
        homepage.classList.add('hidden');
        document.getElementById(pageId).classList.remove('hidden');
    }

    // Check if user is already logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        showPage('homepage');
    } else {
        showPage('login');
    }

    // Registration
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;

        if (username && password) {
            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('Registration successful! You can now log in.');
            showPage('login');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username && password) {
            alert('Login successful!');
            localStorage.setItem('loggedIn', 'true');
            showPage('homepage');
        } else {
            alert('Please fill in both username and password.');
        }
    });

    // Logout
    logoutButton.addEventListener('click', function() {
        localStorage.setItem('loggedIn', 'false');
        alert('You have been logged out.');
        showPage('login');
    });
});








