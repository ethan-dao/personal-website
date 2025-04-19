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
  window.location.href = "/index.html"
})

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
