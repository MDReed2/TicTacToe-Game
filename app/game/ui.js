// const { compile } = require("handlebars")

const player1 = "X"
const player2 = "O"
let currentPlayer = ""

const spaces = ["", "", "", "", "", "", "", "", ""]

let count = 0

const box = []
let i = 0

$('.row div').each(function () {
  box[i++] = $(this).attr('id')
})

const winningOptions = [
  [box[0], box[1], box[2]],
  [box[3], box[4], box[5]],
  [box[6], box[7], box[8]],
  [box[0], box[3], box[6]],
  [box[1], box[4], box[7]],
  [box[2], box[5], box[8]],
  [box[0], box[4], box[8]],
  [box[2], box[4], box[6]]
]

const selectBox = function (event) {
  const id = event.target.id



  if (!spaces[id]) {
    if (count % 2 === 0) {
      currentPlayer = $("#" + id).text(player1)
      $("#" + id).off('click')
      spaces[id] = currentPlayer
    }
    else {
      currentPlayer = $("#" + id).text(player2)
      $("#" + id).off('click')
      spaces[id] = currentPlayer
    }
    count++
  }

  // isBoardFull()

  winningPlayer()

  console.log(spaces)

  return currentPlayer
}


const winningPlayer = function () {
  const results = $('#results')

  for (let idx = 0; idx < 8; idx++) {
    if (
      spaces[winningOptions[idx][0]].innerHTML ===
        spaces[winningOptions[idx][1]].innerHTML &&
      spaces[winningOptions[idx][1]].innerHTML ===
        spaces[winningOptions[idx][2]].innerHTML &&
      spaces[winningOptions[idx][2]].innerHTML ===
        spaces[winningOptions[idx][0]].innerHTML &&
      spaces[winningOptions[idx][0]] != ""
    ) {
      console.log(spaces[winningOptions[idx][0]].innerHTML);

      return ($("#results").text = `${
        spaces[winningOptions[idx][0]].innerHTML
      } is the winner`);
    }
  }
  return
}

const startGameSuccess = function (responseData) {
  $("#user-display").text("Game successfully started")
  $("#user-display").removeClass()
  $("#user-display").addClass("text-white")

  $("#tic-tac-toe div").on("click", selectBox)


  setTimeout(() => $("#user-display").text(""), 3000)
}

const startGameFailure = function () {
  $("#error-message").text(
    "There was a error starting the game. Please try again"
  )

  $("#error-message").removeClass()
  $("#error-message").addClass("text-light")

  setTimeout(() => $("#error-message").text(""), 3000);
}


const resetGame = () => {
  $('.box').text('')

  // for (let i=0; i < spaces.length; i++) {
  //   spaces[i] = ""
  // }
  // count = 0
}


module.exports = {
  startGameSuccess,
  startGameFailure,
  selectBox,
  winningPlayer,
  resetGame
}
