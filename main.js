const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.dataset.name;
        const soundFile = card.dataset.sound;

        // Animate the card
        card.style.transform = 'scale(1.2)';
        setTimeout(() => card.style.transform = 'scale(1)', 300);

        // Try playing the sound
        const sound = new Audio(`assets/sounds/${soundFile}`);
        sound.play();

        // If no audio file, use speech synthesis
        sound.onerror = () => {
            const utter = new SpeechSynthesisUtterance(`This is a ${name}`);
            utter.lang = 'en-US';
            speechSynthesis.speak(utter);
        };
    });
});
