document.addEventListener('DOMContentLoaded', () => {
    const faqContainers = document.querySelectorAll('.flex-container');

    faqContainers.forEach(container => {
        container.addEventListener('click', () => {
            const faqContent = container.nextElementSibling; // Get the next sibling element (the .faq-content)
            const icon = container.querySelector('.plus-icon');

            // Toggle the open class to handle smooth transitions
            if (faqContent.classList.contains('open')) {
                faqContent.classList.remove('open');
                icon.textContent = '+';
            } else {
                // Close all other open content
                document.querySelectorAll('.faq-content.open').forEach(openContent => {
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.querySelector('.plus-icon').textContent = '+';
                });
                // Open the clicked content
                faqContent.classList.add('open');
                icon.textContent = '-';
            }
        });
    });
});
