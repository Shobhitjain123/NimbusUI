// Timeline 9: Stepper Logic
const steps = document.querySelectorAll('.timeline-9 .step');
const progressBar = document.querySelector('.timeline-9 .progress-bar');

steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        // Animate progress bar
        const percent = (index) / (steps.length - 1) * 100;
        progressBar.style.width = percent + '%';
    });
});
