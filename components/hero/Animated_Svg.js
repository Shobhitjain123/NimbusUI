
document.addEventListener('DOMContentLoaded', function () {
    // Add mouse interaction with SVG elements
    const svg = document.querySelector('.animated-svg');
    const circles = document.querySelectorAll('.circle-1, .circle-2, .circle-3, .circle-4');
    const waves = document.querySelectorAll('.wave, .wave-2, .wave-3');

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Move circles based on mouse position
        circles.forEach((circle, index) => {
            const factor = (index + 1) * 10;
            const cx = 400 + (x - 0.5) * factor;
            const cy = 300 + (y - 0.5) * factor;

            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
        });

        // Adjust wave paths based on mouse position
        waves.forEach((wave, index) => {
            const offsetY = (y - 0.5) * 50;
            const baseY = 300 + (index * 50);

            if (index === 0) {
                wave.setAttribute('d', `M0,${baseY + offsetY} Q200,${baseY - 50 + offsetY} 400,${baseY + offsetY} Q600,${baseY + 50 + offsetY} 800,${baseY + offsetY}`);
            } else if (index === 1) {
                wave.setAttribute('d', `M0,${baseY + offsetY} Q200,${baseY - 50 + offsetY} 400,${baseY + offsetY} Q600,${baseY + 50 + offsetY} 800,${baseY + offsetY}`);
            } else {
                wave.setAttribute('d', `M0,${baseY + offsetY} Q200,${baseY - 50 + offsetY} 400,${baseY + offsetY} Q600,${baseY + 50 + offsetY} 800,${baseY + offsetY}`);
            }
        });
    });

    // Reset SVG elements when mouse leaves
    document.addEventListener('mouseleave', function () {
        circles.forEach((circle, index) => {
            circle.setAttribute('cx', '400');
            circle.setAttribute('cy', '300');
        });

        waves.forEach((wave, index) => {
            const baseY = 300 + (index * 50);
            wave.setAttribute('d', `M0,${baseY} Q200,${baseY - 50} 400,${baseY} Q600,${baseY + 50} 800,${baseY}`);
        });
    });
});
