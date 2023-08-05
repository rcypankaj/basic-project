const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlansButton = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaBtn = document.querySelector(".main-nav__item--cta");

selectPlansButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
});

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  // backdrop.style.display = "none";
  // if (modal) modal.style.display = "none";
  if (modal) modal.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

// document.querySelector(".package__badge").addEventListener("click", (e) => {
//   alert("first");
// });
// console.log("Loaded");

ctaBtn.addEventListener("animationstart", (e) => {
  console.log("Animation starts", e);
});

ctaBtn.addEventListener("animationend", (e) => {
  console.log("Animation end", e);
});

ctaBtn.addEventListener("animationiteration", (e) => {
  console.log("Animation Iterate", e);
});
