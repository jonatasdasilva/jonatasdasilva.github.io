const navSlide = () => {
    // Elementos
    const nav = document.querySelector('.navegar');
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('.navegar li');

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