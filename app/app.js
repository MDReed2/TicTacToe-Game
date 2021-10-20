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
  $('#pre-sign-up').on('click', authEvents.onPreSignUp)
  $("#back-to-sign-in")
    .on("click", authEvents.onBackToSignIn)


  // When player clicks Start Game
  $("#start-game").on("click", gameEvents.onStartGame)
  $("#reset-game").on("click", gameEvents.onResetGame)
})

// when game loads
$(window).on("load", () => $('#tic-tac-toe').off('click'))
