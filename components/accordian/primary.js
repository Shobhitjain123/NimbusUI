
// Menu 6: Accordion with animation and chevron
document.querySelectorAll('.menu-6 .accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.chevron');

        const isOpen = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.menu-6 .accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-content').style.maxHeight = null;
            i.querySelector('.chevron').classList.remove('rotate-180');
        });

        // Open current if not already
        if (!isOpen) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.add('rotate-180');
        }
    });
});