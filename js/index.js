var checkbox = document.querySelector('input[name=contraste]');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
}