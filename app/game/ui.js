const player1 = "X"
const player2 = "O"
let currentPlayer = ""

const spaces = ["", "", "", "", "", "", "", "", ""]

let count = 0
const box = []
let i = 0

$(".row div").each(function () {
  box[i++] = $(this).attr("id")
})

const winningOptions = [
  [box[0], box[1], box[2]],
  [box[3], box[4], box[5]],
  [box[6], box[7], box[8]],
  [box[0], box[3], box[6]],
  [box[1], box[4], box[7]],
  [box[2], box[5], box[8]],
  [box[0], box[4], box[8]],
  [box[2], box[4], box[6]],
]

const selectBox = function (event) {
  const id = event.target.id
  if (!spaces[id]) {
    if (count % 2 === 0) {
      currentPlayer = $("#" + id).text(player1)
      $("#" + id).off("click")
      spaces[id] = document.getElementById(id)
    } else {
      currentPlayer = $("#" + id).text(player2)
      $("#" + id).off("click")
      spaces[id] = document.getElementById(id)
    }
    count++
  }

  winningPlayer()

  console.log(spaces)

  return currentPlayer
}
const winningPlayer = function (event) {
  for (let idx = 0; idx < 8; idx++) {
    if (
      spaces[winningOptions[idx][0]].innerHTML ===
        spaces[winningOptions[idx][1]].innerHTML &&
      spaces[winningOptions[idx][1]].innerHTML ===
        spaces[winningOptions[idx][2]].innerHTML &&
      spaces[winningOptions[idx][2]].innerHTML ===
        spaces[winningOptions[idx][0]].innerHTML &&
      spaces[winningOptions[idx][1]].innerHTML !== "" &&
      spaces[winningOptions[idx][1]] !== ""
    ) {
      console.log(spaces[winningOptions[idx][0]].innerHTML)
      $("#results")
        .text(`${spaces[winningOptions[idx][0]].innerHTML} is the WINNER`)
        .addClass("gradient-text")

      $("#tic-tac-toe div").off("click", selectBox)
    } else if (count === 9) {
      $("#results")
        .text('Tie Game')
    }
  }
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

  setTimeout(() => $("#error-message").text(""), 3000)
}

const resetGame = () => {
  $(".box").text("")
  $("#results").text("")
  for (let i = 0; i < spaces.length; i++) {
    spaces[i] = ""
  }
  count = 0
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  selectBox,
  winningPlayer,
  resetGame,
};
