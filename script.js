// Navigation Animation

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// Dark Mode Toggle
const toggle = document.querySelector('light-dark-toggle')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = <i class="fa-light fa-moon"></i>
    } else {
        html.classList.add('dark')
        e.target.innerHTML = <i class="fa-solid fa-sun-bright"></i>
    }
})