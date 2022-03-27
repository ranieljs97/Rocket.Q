import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar os botoes com classe 'check'
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', event => {
    // Mudar a modal
    event.preventDefault()
    modalTitle.innerHTML = 'Marcar como lido'
    modalDescription.innerHTML = 'Tem certeza que deseja marcar como lido?'
    modalButton.innerHTML = 'Sim, marcar como lida '
    modalButton.classList.remove('red')

    // Pegar ID e action do click
    const form = document.querySelector('.modal form')

    // Armazena em constantes
    const slug = 'check'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    // armazena na URL
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    // abrir modal
    modal.open()
  })
})

// Pega os botes com classe delete
const deleteButton = document.querySelectorAll('.actions a.delete')
// qndo botao delete for clicado, abrir modal
deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault()
    // Mudar modal
    modalTitle.innerHTML = 'Excluir esta pergunta'
    modalDescription.innerHTML = 'Tem certeza que deseja excluir esta pergunta?'
    modalButton.innerHTML = 'Sim, excluir'
    modalButton.classList.add('red')

    // Pegar Id e action do click
    const form = document.querySelector('.modal form')

    // Armazena em constantes
    const slug = 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    // armazena na URL
    form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

    modal.open()
  })
})
