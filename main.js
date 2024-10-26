const typed = new Typed("#typed-text", {
  strings: ["Front-end dev", "Mobile dev", "Back-end dev"],
  delay: 2,
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

gsap.from("#navbar", { duration: 0.5, y: "-100%", opacity: 0 });
gsap.from("#sertif", { duration: 1, y: "-100%", opacity: 0, delay: 12 });
gsap.from("#sertif-2", { duration: 1, y: "-100%", opacity: 0, delay: 13 });
gsap.from("#sertif-3", { duration: 1, y: "-100%", opacity: 0, delay: 14 });
gsap.from("#PP", { duration: 2, x: "-100%", opacity: 0, delay: 0.5 });
gsap.from(".Hi", { duration: 1.5, x: "-100%", opacity: 0, delay: 1 });
gsap.from(".this", { duration: 1.5, x: "100%", opacity: 0, delay: 1.5 });
gsap.from(".I", { duration: 1.5, x: "-100%", opacity: 0, delay: 2 });
gsap.from("#project-1", {
  duration: 1.5,
  x: "-100%",
  y: "-50%",
  opacity: 0,
  delay: 8,
});
gsap.from("#project-2", {
  duration: 1.5,
  x: "100%",
  y: "-50%",
  opacity: 0,
  delay: 9,
});
gsap.from("#project-3", {
  duration: 1.5,
  x: "-100%",
  y: "50%",
  opacity: 0,
  delay: 10,
});
gsap.from("#project-4", {
  duration: 1.5,
  x: "100%",
  y: "50%",
  opacity: 0,
  delay: 11,
});

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
  body.classList.add("light-mode");
  sunIcon.classList.remove("d-none");
  moonIcon.classList.add("d-none");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLightMode = body.classList.contains("light-mode");

  sunIcon.classList.toggle("d-none", !isLightMode);
  moonIcon.classList.toggle("d-none", isLightMode);

  const theme = isLightMode ? "light" : "dark";
  localStorage.setItem("theme", theme);
});
