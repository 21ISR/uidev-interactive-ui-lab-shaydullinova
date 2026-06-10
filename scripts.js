const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('.popup-close')
const popup = document.querySelector('.popup-overlay')
const popupForm = document.querySelector('#popup-form')


openBtn.addEventListener('click', () => {
    popup.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})

popupForm.addEventListener('submit', () => {
    alert('Сообщение отправлено!')
})



const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')
        headers.forEach((otherHeader) => {
            if (otherHeader != header) {
                otherHeader.classList.remove('active')
                if (otherHeader.nextElementSibling) {
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            }
        })

        if (isOpen) {
            content.style.maxHeight = null;
            header.classList.remove('active')
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            header.classList.toggle('active');
        }
    })
})

const tabBtn = document.querySelectorAll('.tab-btn')
const tabContent = document.querySelectorAll('.tab-content')

tabBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab')
        const targetContent = document.getElementById(tabId)

        if (targetContent) {
            tabBtn.forEach((btn) => btn.classList.remove('active'))
            button.classList.add('active')

            tabContent.forEach((content) => {
                content.classList.remove('active')
                content.style.display = 'none'
            })

            targetContent.classList.add('active')
            targetContent.style.display = 'block'
        }
    })
})

const tooltips = document.querySelectorAll('.tooltip')

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        const tooltipText = tooltip.querySelector('.tooltip-text')
        tooltipText.style.display = 'block'
    })

    tooltip.addEventListener('mouseleave', () => {
        tooltipText.style.display = 'none'
    })
})

const slider = document.querySelector('.slider')
const slides = document.querySelector('.slide')
const arrowRight = document.querySelector('.slider-arrow-right')
const arrowLeft = document.querySelector('.slider-arrow-left')
const dots = document.querySelectorAll('.slider-dot')

let currentSlide = 0;

function sliderUpdate() {
    slider.slide.transform = 'translateX(-${currentSlide * 100}%)'

    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    dots[currentSlide].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if (currentSlide < slides.lenght - 1) {
        currentSlide++
        sliderUpdate()
    }
})

arrowLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--
        sliderUpdate()
    }
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index
        sliderUpdate()
    })
})





