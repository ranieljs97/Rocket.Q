const express = require('express')
const req = require('express/lib/request')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

route.get('/room/:room-id', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.post('/room/:room/:question/:action', QuestionController.index)
route.post('/room/create-room', RoomController.create)

module.exports = route
