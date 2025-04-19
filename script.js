// Right hand buttons (light/dark theme, home button)
const themeToggleBtn = document.getElementById("theme-toggle");
const homeBtn = document.getElementById("home-button");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  body.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html"
})

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
  document.getElementById("album-art").src = song.image;
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;
}

showRandomSong();
setInterval(showRandomSong, 60000); 

// Contact me form
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailingLink = `mailto:ethandao@g.ucla.edu?subject=New message from ${email}&body=${encodeURIComponent(message)}`;

    window.location.href = mailingLink;

    contactForm.reset();
  });
}
