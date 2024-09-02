document.addEventListener('DOMContentLoaded', function() {
    const btnFocused = document.querySelector('.btn-focused');
    const btnOther = document.querySelector('.btn-other');
    const emailListFocused = document.querySelector('.email-list.focused');
    const emailListOther = document.querySelector('.email-list.other');
    const emailItems = document.querySelectorAll('.email-item');
    const emailContent = document.querySelector('.email-content .content');
    const inboxButton = document.getElementById('inboxButton');
    const mainContentArea = document.getElementById('Main-Content-Area');
            
    // Function to toggle between Focused and Other email lists
    function toggleEmailList(showFocused) {
        if (showFocused) {
            emailListFocused.style.display = 'block';
            emailListOther.style.display = 'none';
            btnFocused.classList.add('active');
            btnOther.classList.remove('active');
        } else {
            emailListFocused.style.display = 'none';
            emailListOther.style.display = 'block';
            btnFocused.classList.remove('active');
            btnOther.classList.add('active');
        }
    }

    // Event listeners for Focused and Other buttons
    btnFocused.addEventListener('click', () => toggleEmailList(true));
    btnOther.addEventListener('click', () => toggleEmailList(false));

    // Event listener to display email content
    emailItems.forEach(item => {
        item.addEventListener('click', function() {
            const subject = this.querySelector('h6').innerText;
            const preview = this.querySelector('p').innerText;
            emailContent.innerHTML = `<h4>${subject}</h4><p>${preview}</p>`;
        });
    });

    // Show "Select an item to read" initially
    mainContentArea.classList.add('hidden');

    // Inbox button click event
    inboxButton.addEventListener('click', function() {
        mainContentArea.classList.remove('hidden');
        mainContentArea.classList.add('visible');
    });



});
