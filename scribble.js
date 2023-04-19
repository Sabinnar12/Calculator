function scribble() {
        const text = document.querySelector('.scribble');
        const textWidth = text.offsetWidth;
        const textHeight = text.offsetHeight;
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const coords = [];

        for (let i = 0; i < 20; i++) {
          const x = Math.random() * (containerWidth - textWidth);
          const y = Math.random() * (containerHeight - textHeight);
          coords.push({ x, y });
        }

        let i = 0;

        setInterval(() => {
          text.style.transform = `translate(${coords[i].x}px, ${coords[i].y}px)`;
          i = (i + 1) % coords.length;
        }, 100);
      }

      scribble();

      const bgMusic = document.getElementById('bg-music');
      const playPauseBtn = document.getElementById('play-pause-btn');

      playPauseBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
          bgMusic.play();
          playPauseBtn.innerHTML = 'Pause Music';
        } else {
          bgMusic.pause();
          playPauseBtn.innerHTML = 'Play Music';
        }
      });
