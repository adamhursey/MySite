var body = document.body,
    overlay = document.querySelector('.overlay'),
    cotdOverlay = document.querySelector('.overlay-module--cotd')
    r5Overlay = document.querySelector('.overlay-module--r5');
    cotdBtn = document.querySelector('.project-image--cotd');
    r5Btn = document.querySelector('.project-image--r5');
    closeOverlayBtns = document.querySelectorAll('.close-overlay');
  navigationBtn = document.querySelector('.navigation__button');
  age = document.querySelector('.age');

[].forEach.call(closeOverlayBtns, function(btn) {
   btn.addEventListener('click', btn => {
   overlay.setAttribute('aria-hidden', true);
   body.classList.toggle('noscroll', false);
   setTimeout(() => {r5Overlay.classList.toggle("u-hidden", false)}, 500);
   setTimeout(() => {cotdOverlay.classList.toggle("u-hidden", false)}, 500);
   overlay.scrollTop = 0;
   })
});

cotdBtn.addEventListener('click', function() {
   overlay.setAttribute('aria-hidden', false);
   r5Overlay.className += ' u-hidden';
   body.classList.toggle('noscroll', true);
   overlay.scrollTop = 0;

}, false);

r5Btn.addEventListener('click', function() {
   overlay.setAttribute('aria-hidden', false);
   cotdOverlay.className += ' u-hidden';
   body.classList.toggle('noscroll', true);
   overlay.scrollTop = 0;

}, false);

navigationBtn.addEventListener('click', function () {
  if (navigationBtn.innerHTML == 'Contact') {
    navigationBtn.innerHTML = '<div class="close-nav close-nav--button"></div>';
  } else {
    navigationBtn.innerHTML = 'Contact';
  }
})

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

age.innerText = getAge("1996/02/24")


