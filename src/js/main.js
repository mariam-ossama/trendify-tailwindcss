import 'flowbite';
const navLinks = document.querySelectorAll('nav li');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
    });
    navLinks.forEach(l => l.classList.remove('text-[#8B5E35]'));
    this.classList.add('text-[#8B5E35]');
    const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
})