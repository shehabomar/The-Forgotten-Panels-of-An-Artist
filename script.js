let btn = document.getElementById('button');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


let audio = null; // Initialize an audio element variable

function playCardSound(event) {
    if (audio) {
        audio.pause(); // Pause the currently playing audio
        audio = null; // Reset the audio element
    }

    const audioFile = event.currentTarget.getAttribute('data-audio');

    if (audioFile) {
        audio = new Audio(audioFile);
        audio.play();

        // Disable click events for all comic cards
        const comicCards = document.querySelectorAll('.comic-card');
        comicCards.forEach((card) => {
            card.style.pointerEvents = 'none';
        });

        audio.addEventListener('ended', function() {
            audio = null; // Reset the audio element after it finishes playing
            comicCards.forEach((card) => {
                card.style.pointerEvents = 'auto'; // Enable click events
            });
        });
    }
}

const comicCards = document.querySelectorAll('.comic-card');
comicCards.forEach((card) => {
    card.addEventListener('click', playCardSound);
});

