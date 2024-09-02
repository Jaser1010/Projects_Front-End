document.addEventListener('DOMContentLoaded', function() {
    var loginTab = document.getElementById('login-tab');
    var signupTab = document.getElementById('signup-tab');
    var loginContent = document.getElementById('login');
    var signupContent = document.getElementById('signup');

    function showTab(tabId) {
        if (tabId === 'login') {
            loginContent.style.display = 'block';
            signupContent.style.display = 'none';
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
        } else if (tabId === 'signup') {
            loginContent.style.display = 'none';
            signupContent.style.display = 'block';
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
        }
    }

    loginTab.addEventListener('click', function() {
        showTab('login');
    });

    signupTab.addEventListener('click', function() {
        showTab('signup');
    });

    
    
});
