// Enhanced theme toggle and navigation
const themeToggleBtn = document.getElementById("theme-toggle");
const homeBtn = document.getElementById("home-button");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

// Smooth theme transition
if (currentTheme === "light") {
  body.classList.add("light-theme");
  body.style.background = "linear-gradient(135deg, #ffffff, #f8f9fa)";
} else {
  body.style.background = "linear-gradient(-45deg, #121212, #181818, #1a1a1a, #121212)";
}

themeToggleBtn.addEventListener("click", () => {
  // Add smooth transition effect
  body.style.transition = "all 0.3s ease";
  body.classList.toggle("light-theme");

  // Update button icon with animation
  themeToggleBtn.style.transform = "rotate(180deg)";
  setTimeout(() => {
    themeToggleBtn.style.transform = "rotate(0deg)";
  }, 300);

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
    // Update background for light mode
    body.style.background = "linear-gradient(135deg, #ffffff, #f8f9fa)";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
    // Reset to dark mode background
    body.style.background = "linear-gradient(-45deg, #121212, #181818, #1a1a1a, #121212)";
  }
});

homeBtn.addEventListener("click", () => {
  // Add smooth navigation effect
  document.body.style.opacity = "0.8";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 150);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add cool interactive features instead of particles
function createInteractiveBackground() {
  // Create a subtle animated background gradient
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    body {
      background: linear-gradient(-45deg, #121212, #181818, #1a1a1a, #121212);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }
    
  `;
  document.head.appendChild(style);
}

// Initialize interactive background
createInteractiveBackground();

// Randomized songs
const songs = [
  {
    title: "Everlong",
    artist: "Foo Fighters",
    image: "images/everlong.jpg"
  },
  {
    title: "I Almost Do (Taylor's Version)",
    artist: "Taylor Swift",
    image: "images/red-tv.jpg"
  },
  {
    title: "All I Need",
    artist: "Radiohead",
    image: "images/in-rainbows.jpg"
  },
  {
    title: "Cute Thing",
    artist: "Car Seat Headrest",
    image: "images/twin-fantasy.jpg"
  },
  {
    title: "Green Light",
    artist: "Lorde",
    image: "images/melodrama.jpg"
  },
  {
    title: "Let It Happen",
    artist: "Tame Impala",
    image: "images/album-cover.jpeg"
  },
  {
    title: "Cornelia Street",
    artist: "Taylor Swift",
    image: "images/lover.jpg"
  },
  {
    title: "Thinkin Bout You",
    artist: "Frank Ocean",
    image: "images/channel-orange.jpg"
  },
  {
    title: "You Were Right",
    artist: "RÜFÜS DU SOL",
    image: "images/bloom.jpg"
  },
  {
    title: "So Sick",
    artist: "Ne-Yo",
    image: "images/so-sick.jpg"
  },
  {
    title: "House of Cards",
    artist: "Radiohead",
    image: "images/in-rainbows.jpg"
  }, 
  {
    title: "I'm On Fire", 
    artist: "Bruce Springsteen", 
    image: "images/born-in-the-usa.jpg"
  }

];

function showRandomSong() {
  const song = songs[Math.floor(Math.random() * songs.length)];
  const albumArt = document.getElementById("album-art");
  const songTitle = document.getElementById("song-title");
  const songArtist = document.getElementById("song-artist");
  
  // Add smooth transition effect
  albumArt.style.opacity = "0.5";
  albumArt.style.transform = "scale(0.9)";
  
  setTimeout(() => {
    albumArt.src = song.image;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    
    albumArt.style.opacity = "1";
    albumArt.style.transform = "scale(1)";
  }, 150);
  
  localStorage.setItem("currentSong", JSON.stringify(song));
}

function loadSavedSongOrRandom() {
  const savedSong = localStorage.getItem("currentSong");

  if (savedSong) {
    const song = JSON.parse(savedSong);
    const albumArt = document.getElementById("album-art");
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    
    albumArt.src = song.image;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
  } else {
    showRandomSong();
  }
}

// Enhanced music player with click-to-change functionality
function initializeMusicPlayer() {
  const albumArt = document.getElementById("album-art");
  if (albumArt) {
    albumArt.style.cursor = "pointer";
    albumArt.addEventListener("click", showRandomSong);
    
    // Add hover effect
    albumArt.addEventListener("mouseenter", () => {
      albumArt.style.transform = "scale(1.05)";
      albumArt.style.boxShadow = "0 8px 20px rgba(29, 185, 84, 0.3)";
    });
    
    albumArt.addEventListener("mouseleave", () => {
      albumArt.style.transform = "scale(1)";
      albumArt.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.5)";
    });
  }
}

loadSavedSongOrRandom();
initializeMusicPlayer();
setInterval(showRandomSong, 60000); 

// Enhanced contact form with better UX
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('input[type="submit"]');
    const originalText = submitBtn.value;
    
    // Add loading state
    submitBtn.value = "Sending...";
    submitBtn.disabled = true;

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailingLink = `mailto:ethandao@g.ucla.edu?subject=New message from ${email}&body=${encodeURIComponent(message)}`;

    setTimeout(() => {
    window.location.href = mailingLink;
      submitBtn.value = "Sent! ✓";

      setTimeout(() => {
    contactForm.reset();
        submitBtn.value = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 1000);
  });
}

// Image modal functionality
function initializeImageModal() {
  const images = document.querySelectorAll('.image-grid img, .main-content ol.horizontal-scroll li img');
  
  images.forEach(img => {
    img.addEventListener('click', () => {
      createImageModal(img.src, img.alt);
    });
  });
}

function createImageModal(src, alt) {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transform: scale(0.8);
    transition: transform 0.3s ease;
  `;
  
  modal.appendChild(img);
  document.body.appendChild(modal);
  
  // Animate in
  setTimeout(() => {
    modal.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 10);
  
  // Close on click
  modal.addEventListener('click', () => {
    modal.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  });
}

// Initialize image modal functionality
initializeImageModal();

// Add smooth reveal animation for elements (excluding project items)
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe only image-grid images, not project items
  document.querySelectorAll('.image-grid img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Make all project items visible immediately
  document.querySelectorAll('.project-item').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
}

// Initialize scroll animations
initializeScrollAnimations();

// Removed typing effect for headings

// Removed parallax effect to keep sidebar fixed

// Interactive hover effects for cards
function createInteractiveCards() {
  const cards = document.querySelectorAll('.project-item, .sidebar-footer');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) rotateY(5deg)';
      card.style.boxShadow = '0 20px 40px rgba(29, 185, 84, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateY(0deg)';
      card.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
    });
  });
}

// Sound effects (visual feedback)
function createSoundEffects() {
  const clickableElements = document.querySelectorAll('button, a, img');
  
  clickableElements.forEach(element => {
    element.addEventListener('click', () => {
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(29, 185, 84, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: ripple 0.6s ease-out forwards;
      `;
      
      const rect = element.getBoundingClientRect();
      ripple.style.left = (rect.left + rect.width/2 - 50) + 'px';
      ripple.style.top = (rect.top + rect.height/2 - 50) + 'px';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    });
  });
  
  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Dynamic text effects (without shifting)
function createTextEffects() {
  const textElements = document.querySelectorAll('h2, p');
  
  textElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.textShadow = '0 0 20px rgba(29, 185, 84, 0.5)';
      // Removed translateX to prevent shifting
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.textShadow = 'none';
      // Removed transform reset
    });
  });
}

// Dynamic progress bar
function createProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #1db954, #1ed760);
    z-index: 10000;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(29, 185, 84, 0.5);
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Interactive image gallery with keyboard navigation
function createImageGallery() {
  const images = document.querySelectorAll('.image-grid img');
  let currentImageIndex = -1;
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (currentImageIndex >= 0) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        createImageModal(images[currentImageIndex].src, images[currentImageIndex].alt);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        createImageModal(images[currentImageIndex].src, images[currentImageIndex].alt);
      } else if (e.key === 'Escape') {
        const modal = document.querySelector('.image-modal');
        if (modal) modal.click();
      }
    }
  });
  
  // Update image click handlers
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentImageIndex = index;
      createImageModal(img.src, img.alt);
    });
  });
}

// Particle explosion on click
function createParticleExplosion() {
  const clickableElements = document.querySelectorAll('button, .header-icon');
  
  clickableElements.forEach(element => {
    element.addEventListener('click', (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          width: 6px;
          height: 6px;
          background: #1db954;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          left: ${centerX}px;
          top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 100 + Math.random() * 50;
        const lifetime = 1000 + Math.random() * 500;
        
        particle.animate([
          {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
          },
          {
            transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: lifetime,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        };
      }
    });
  });
}

// Initialize all interactive features
setTimeout(() => {
  createInteractiveCards();
  createSoundEffects();
  createTextEffects();
  createProgressBar();
  createImageGallery();
  createParticleExplosion();
}, 1000);
