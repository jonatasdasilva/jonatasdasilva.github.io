/*============= SALDAÇÃO ============*/
console.log('Olá Dev 👨🏽‍💻, vamos avançar para o nível estelar 🌟! Vamos ampliar nossos conhecimentos 🧠, e manter o coração batendo 🫀. E não se esqueça de parar para respirar!')

/*============= THEME =============*/
var checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('contraste').classList.add("dark");
        document.getElementById('theme').classList.add("dark");
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('contraste').classList.remove("dark");
        document.getElementById('theme').classList.remove("dark");
    }
});

var mobile_theme = document.querySelector('input[name="theme-mobile"]');

mobile_theme.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('contraste').classList.add("dark");
        document.getElementById('theme').classList.add("dark");
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('contraste').classList.remove("dark");
        document.getElementById('theme').classList.remove("dark");
    }
});

/*======== Show Header Mobile ========*/
/*
const showHeaderMobile = () => {
  const header = document.getElementById('header');
  const mobile = document.getElementById('mobile');
  const desktop = document.getElementById('desktop');
  const width = document.documentElement.clientWidth;

  if (width <= 1250){
    header.classList.add('mobile');
    desktop.classList.add('hide');
    mobile.classList.add('show');
  } else {
    header.classList.remove('mobile');
    desktop.classList.remove('hide');
    mobile.classList.remove('show');
  }
}

showHeaderMobile();

window.setInterval('showHeaderMobile()', 50);*/


/*========== Show Scroll UP =========*/
function showScrollUp() {
  const goTop = document.getElementById('go_top');
  if (this.scrollY >= 250){
    goTop.classList.add('show'); 
  } else {
    goTop.classList.remove('show');
  }
}

window.addEventListener('scroll', showScrollUp);

/*============== Go Top =============*/
function goTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

/*========== Title Section ==========*/
function titleSection() {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('article[id]');
  
  sections.forEach(
    current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 420;

      sectionId = current.getAttribute('id');
      let titleMenu = document.getElementById("title");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        titleMenu.innerHTML = document.querySelector('.menu a[href*=' + sectionId + '] span').textContent;
      }
    }
  );
}

window.addEventListener('scroll', titleSection);

function menuScrollingMobile() {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('article[id]');
  
  sections.forEach(
    current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;

      sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.menu_mobile .content-menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
        document.querySelector('.menu_mobile .content-menu a[href*=' + sectionId + ']').classList.remove('active')
      }
    }
  );
}

window.addEventListener('scroll', menuScrollingMobile);

/*============= MENU MOBILE =============*/
const showMenuMobile = () => {
  const nav_mobile = document.querySelector('.menu_mobile'); //menu mobile
  const button_menu = document.querySelector('.header .content-mobile .drop_menu'); //botão menu mobile

  button_menu.addEventListener('click', () => {
      // active nav bar mobile
      nav_mobile.classList.toggle('active');
  });
}

showMenuMobile();

/*========== SCROLL MENU ==========*/
function menuScrolling() {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('article[id]');
  
  sections.forEach(
    current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;

      sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.header .content-desktop .menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
        document.querySelector('.header .content-desktop .menu a[href*=' + sectionId + ']').classList.remove('active')
      }
    }
  );
}

window.addEventListener('scroll', menuScrolling);