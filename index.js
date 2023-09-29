document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('open')
  })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Действие при клике
    document.querySelector('.header').classList.remove('open')
  }
})

// Закрыть меню при клике вне его
document.getElementById('menu').addEventListener('click', (event) => {
  event._isClickWithInMenu = true
})
document.getElementById('burger').addEventListener('click', (event) => {
  event._isClickWithInMenu = true
})
document.body.addEventListener('click', (event) => {
  if (event._isClickWithInMenu) return
  // Действие при клике
  document.querySelector('.header').classList.remove('open')
})

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' })
  }
}

// Открыть модальное окно
document.getElementById('send-message').addEventListener('click', function () {
  document.getElementById('modal').classList.add('open')
})

// Закрыть модальное окно
document.getElementById('close-modal').addEventListener('click', function () {
  document.getElementById('modal').classList.remove('open')
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('open')
  }
})

// Закрыть модальное окно при клике вне его
document
  .querySelector('#modal .modal-box')
  .addEventListener('click', (event) => {
    event._isClickWithInModal = true
  })

document.getElementById('modal').addEventListener('click', (event) => {
  if (event._isClickWithInModal) return
  event.currentTarget.classList.remove('open')
})

//Валидация формы отправки email
let email = document.getElementById('email')
let emailLabel = document.getElementById('email-label')
let emailError = document.getElementById('email-error')

let name = document.getElementById('name')
let phone = document.getElementById('phone')
let message = document.getElementById('message')

function validateEmail() {
  emailLabel.style.bottom = '35px'
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Please enter a valid email'
    return false
  }
  emailLabel.style.bottom = '20px'
  emailError.innerHTML = ''
  return true
}

