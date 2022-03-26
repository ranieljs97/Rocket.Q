import Modal from './modal.js'

const modal = Modal()

// Pegar os botoes com classe 'check'
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', event => {
    // abrir modal
    modal.open()
  })
})
