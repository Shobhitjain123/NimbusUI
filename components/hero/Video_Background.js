
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('hero-video');

    // Ensure video plays automatically
    video.play().catch(function (error) {
        console.log("Video play failed:", error);

        // If autoplay fails, show a play button
        const heroContent = document.querySelector('.hero-content');
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Video';
        playButton.classList.add('play-btn');
        playButton.style.marginTop = '20px';

        playButton.addEventListener('click', function () {
            video.play();
            playButton.remove();
        });

        heroContent.appendChild(playButton);
    });
});
