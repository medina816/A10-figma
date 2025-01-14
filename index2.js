document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.four img'); 
    const section12Bot = document.querySelector('.section12-bot'); 

    if (toggleButton && section12Bot) {
        toggleButton.addEventListener('click', () => {
            section12Bot.style.display = section12Bot.style.display === 'none' ? 'block' : 'none';

            if (toggleButton.src.includes('turnunion.svg')) {
                toggleButton.src = './svg/union.svg';
            } else {
                toggleButton.src = './svg/turnunion.svg';
            }
        });
    }
});
