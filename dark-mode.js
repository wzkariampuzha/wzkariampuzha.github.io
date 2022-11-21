// Documentation: 
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#JavaScript

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