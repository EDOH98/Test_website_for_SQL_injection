// Predefined users (including an admin)
const users = [
    { username: 'DiceAils', password:'dice', role: 'admin' },
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'user2', password: 'password2', role: 'user' },
    { username: 'user3', password: 'password3', role: 'user' },
    { username: 'user4', password: 'password4', role: 'user' }
];

// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        document.getElementById('loginMessage').innerText = `Welcome ${user.username}!`;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('idea-exchange').style.display = 'block';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
});

// Handle idea submission
document.getElementById('submitIdea').addEventListener('click', function () {
    const ideaInput = document.getElementById('ideaInput');
    const ideaText = ideaInput.value.trim();
    
    if (ideaText) {
        const ideaItem = document.createElement('li');
        ideaItem.textContent = ideaText;
        document.getElementById('ideasList').appendChild(ideaItem);
        ideaInput.value = '';
    }
});

// Handle logout
document.getElementById('logout').addEventListener('click', function () {
    document.getElementById('idea-exchange').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('loginMessage').innerText = '';
});