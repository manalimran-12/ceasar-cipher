
// const mobileNav = document.querySelector(".hamburger");
// const navbar = document.querySelector(".menubar");

// const toggleNav = () => {
//   navbar.classList.toggle("active");
//   mobileNav.classList.toggle("hamburger-active");
// };
// mobileNav.addEventListener("click", () => toggleNav());

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}