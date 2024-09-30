document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.closest('.faq-item').querySelector('.answer');
            const button = question.querySelector('.faq-toggle-button');
            const horizontal = button.querySelector('.horizontal-faq');
            const vertical = button.querySelector('.vertical-faq');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                vertical.classList.remove('rotated'); 
            } else {
                answer.style.display = 'block';
                vertical.classList.add('rotated'); 
            }

            horizontal.style.display = 'block'; 
        });
    });
});
