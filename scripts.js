const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('.popup-close')

const popup = document.querySelector('.popup-overlay')
const popupform = document.querySelector('#popup-form')


openBtn.addEventListener('click', () => {
    popup.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})

popupform.addEventListener('submit', () => {
    alert('Сообщение отправлено!')
})

const tabButton = document.querySelector('.tab-btn');
const tabContent = document.querySelector('.tab-content');

tabButton.forEach((button) => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab')
        const targetContent = document.getElementById(tabId);

        if (targetContent) {
            tabButton.forEach((btn) => btn.classList.remove('active'))
            button.classList.add('.active')
        };
    });
});

const headers = document.querySelectorAll('.accordion-header')
document
    .querySelectorAll('.tab-btn')
    .forEach((btn) => btn.classList.remove('active'))

headers.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')
        if (isOpen) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
        header.classList.toggle('active')
    })
})