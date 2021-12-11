$(function () {
  let typed = new Typed('.header__descr--typed', {
    strings: ['Raise the next generation of leaders', 'Duplicate your success online', 'Make the best distributors', 'Maximize your business'],
  smartBackspace: true, // Default value
  loop: true,
  typeSpeed: 80,
  backSpeed: 40
});

  let menuBtn = document.querySelector('.menu__btn');
  let menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
})