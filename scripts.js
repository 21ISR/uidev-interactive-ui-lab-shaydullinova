const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('.popup-close')
const popup = document.querySelector('.popup-overlay')
const popupForm = document.querySelector('#popup-form')

openBtn.addEventListener('click', () => {
    popup.style.position = 'fixed'
    popup.style.top = '0'
    popup.style.left = '0'
    popup.style.width = '100%'
    popup.style.height = '100%'
    popup.style.backdropFilter = 'blur(6px)'
    popup.style.display = 'flex'
    popup.style.justifyContent = 'center'
    popup.style.alignItems = 'center'
    popup.style.zIndex = '100'
})

const popupWindow = popup.querySelector('.popup')
    if (popupWindow) {
        popupWindow.style.position = 'relative'
        popupWindow.style.backgroundColor = '#ffffff'
        popupWindow.style.padding = '30px'
        popupWindow.style.borderRadius = '8px'
        popupWindow.style.maxWidth = '420px'
        popupWindow.style.width = '100%'
        popupWindow.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
    }

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'
    }
})

popupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Сообщение отправлено!')
    popup.style.display = 'none'
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
                    otherHeader.nextElementSibling.style.maxHeight = null
                }
            }
        })

        if (isOpen) {
            content.style.maxHeight = null
            header.classList.remove('active')
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
            header.classList.add('active')
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
    const tooltipText = tooltip.querySelector('.tooltip-text')

    tooltip.addEventListener('mouseenter', () => {
        tooltipText.style.visibility = 'visible'
        tooltipText.style.opacity = '1'
    })

    tooltip.addEventListener('mouseleave', () => {
        tooltipText.style.visibility = 'hidden'
        tooltipText.style.opacity = '0'
    })
})

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const arrowRight = document.querySelector('.slider-arrow-right')
const arrowLeft = document.querySelector('.slider-arrow-left')
const dots = document.querySelectorAll('.slider-dot')

let currentSlide = 0

function sliderUpdate() {
    const sliderContainer = document.querySelector('.slider-container')
    if (sliderContainer) {
        sliderContainer.style.overflow = 'hidden'
        sliderContainer.style.position = 'relative'
    }

    if (slider) {
        slider.style.display = 'flex'
        slider.style.transform = `translateX(-${currentSlide * 100}%)`
    }

    slides.forEach((slide) => {
        slide.style.minWidth = '100%'
        slide.style.boxSizing = 'border-box'
    })

    dots.forEach((dot) => dot.classList.remove('active'))
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active')
    }
}

if (slides.length > 0) {
    sliderUpdate()
}

arrowRight.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
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