document.addEventListener("DOMContentLoaded", function () {
  const langSwitcher = document.querySelector(".lang-switcher");
  const currentLangIcon = document.querySelector(".current-lang-icon");
  const otherLangIcon = document.querySelector('.lang-icon[data-lang="es"]');
  const esElements = document.querySelectorAll(".es");
  const enElements = document.querySelectorAll(".en");

  langSwitcher.addEventListener("click", function () {
    // Toggle icons' rotation animation
    currentLangIcon.classList.toggle("up");
    otherLangIcon.style.display = "block";
    otherLangIcon.classList.toggle("down");

    // Swap icons after animation delay
    setTimeout(() => {
      const tempSrc = currentLangIcon.src;
      currentLangIcon.src = otherLangIcon.src;
      otherLangIcon.src = tempSrc;
      otherLangIcon.style.display = "none"; // Hide the other language icon
    }, 300); // Match animation duration

    // Toggle text display for both languages
    esElements.forEach((el) => {
      el.style.display = el.style.display === "none" ? "block" : "none";
    });
    enElements.forEach((el) => {
      el.style.display = el.style.display === "none" ? "block" : "none";
    });
  });

  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

const images = document.querySelectorAll(".background-image");

images.forEach((image, index) => {
  // Випадкова початкова позиція
  image.style.left = Math.random() * window.innerWidth + "px";
  image.style.top = Math.random() * window.innerHeight + "px";

  let duration;
  switch (index) {
    case 0:
      duration = 500; // 2 секунди для першого зображення
      break;
    case 1:
      duration = 600; // 2.5 секунди для другого зображення
      break;
    case 2:
      duration = 700; // 3 секунди для третього зображення
      break;
  }

  // Анімація
  setInterval(() => {
    image.style.transition = `transform ${duration}ms ease-in-out`;
    image.style.transform = "rotate(10deg) translateX(30px)"; // Поворот і переміщення вправо

    setTimeout(() => {
      image.style.transform = "rotate(-10deg) translateX(0px)"; // Поворот назад і переміщення вліво
    }, duration / 2); // Повернення на половині циклу

    // Пауза перед наступним циклом
    setTimeout(() => {
      image.style.transform = "rotate(0deg)"; // Повернення до початкового положення
    }, duration);
  }, duration * 2); // Цикл повторюється з подвоєною тривалістю
});
