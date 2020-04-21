var checkbox = document.querySelector('input[name=contraste]');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

const navSlide = () => {
    // Elementos
    const nav = document.querySelector('.navegar-menu'); //ul do documento
    const burger = document.querySelector('.burger'); //botão burger
    const links = document.querySelectorAll('.navegar-menu li'); //coleta todas as lis para aplicar animação, pode ser removido

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navegarFade 0.5s ease forwards ${index /7 + 0.45}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();