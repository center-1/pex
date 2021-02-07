
// magic line menu 
document.addEventListener('DOMContentLoaded', () => {
  const navLine = document.querySelector('.menu-line'),
        navItem = document.querySelectorAll('.menu-item');

  navLine.style.width = `${navItem[0].offsetWidth}px`;

  navItem.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      navLine.style.width = `${e.currentTarget.offsetWidth}px`;
      navLine.style.left = `${e.currentTarget.offsetLeft}px`;
    });
  });


// плавный scroll buttonUP 
function scrollTo(element) {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

let buttonUp = document.querySelector('.button-up');
let header = document.querySelector('.main-header');

buttonUp.addEventListener('click', () => {
  scrollTo(header);
})

// добавление/удаление buttonUP после скролла 300px 
window.onscroll = function () {
  if (window.pageYOffset > 300) {
    buttonUp.classList.add('shown');
  } else {
    buttonUp.classList.remove('shown');
  }
};

});  // DOMContentLoaded 

