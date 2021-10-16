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
      spaces[id] = currentPlayer;
    }
    count++
  }

  if (winningPlayer()) {
    $("#user-display").text(`${currentPlayer} is the WINNER`)

    return
  }

  console.log(spaces)
}



const winningPlayer = function () {

  for (let idx = 0; idx < 8; idx++) {
    if (
      spaces[winningOptions[idx][0]].innerText ===
        spaces[winningOptions[idx][1]].innerText &&
      spaces[winningOptions[idx][1]].innerText ===
        spaces[winningOptions[idx][2]].innerText &&
      spaces[winningOptions[idx][2]].innerText ===
        spaces[winningOptions[idx][0]].innerText &&
      spaces[winningOptions[idx][0]] != ""
    ) {
      return $("#user-display").text = `${
        spaces[winningOptions[idx][0]].innerText
      } is the winner`
    }
  }
  return
}


module.exports = {
  selectBox,
  winningPlayer
}
