document.addEventListener('DOMContentLoaded', function() {
    var steps = document.querySelectorAll('.form-step');
    var nextButton = document.getElementById('next');
    var prevButton = document.getElementById('prev');
    var submitButton = document.getElementById('submit');
    var currentStep = 0;

    function showStep(stepIndex) {
        for (var i = 0; i < steps.length; i++) {
            steps[i].classList.toggle('active', i === stepIndex);
        }
        prevButton.classList.toggle('hidden', stepIndex === 0);
        nextButton.classList.toggle('hidden', stepIndex === steps.length - 1);
        submitButton.classList.toggle('hidden', stepIndex !== steps.length - 1);
    }

    nextButton.addEventListener('click', function() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    showStep(currentStep);
});
