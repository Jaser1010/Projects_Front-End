class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();


    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    var user = new User(username, email, password);


    var displayText = 
    `<strong>Username:</strong> ${user.username}<br>
    <strong>Email:</strong> ${user.email}<br>
    <strong>Password:</strong> ${user.password} `;
    
    document.getElementById('dataDisplay').innerHTML = displayText;

    
    this.reset();

});
