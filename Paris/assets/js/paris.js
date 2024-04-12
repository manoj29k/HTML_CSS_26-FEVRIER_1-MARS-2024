const menu = document.getElementById('menu');

 menu.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active')
})