// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Whenever out sign up form is submitted call the `onSignup` function
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', authEvents.onStartGame)
  $('#pre-sign-up').on('click', authEvents.onPreSignUp)
  $('#back-to-sign-in').on('click', authEvents.onBackToSignIn)

  // When player clicks on box
  $('#tic-tac-toe div').on('click', gameEvents.onBoxSelection)
})
