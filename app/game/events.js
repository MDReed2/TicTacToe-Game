// require the getFormFields function, to get the data from our forms
// const getFormFields = require('../../lib/get-form-fields')

// require out api auth functions
const api = require('./api')

// require ui functions to update the page
const ui = require('./ui')

const onStartGame = function (event) {
  event.preventDefault()
  const gameStart = event.target

  api
    .startGame(gameStart)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

// const onBoxSelection = function (event) {
//   event.preventDefault()

//   const boxSelection = event

//   ui
//     .selectBox(boxSelection)
// }

const onResetGame = function (event) {
  event.preventDefault()

  const reset = event

  ui
    .resetGame(reset)
};

module.exports = {
  onStartGame,
  // onBoxSelection,
  onResetGame
};
