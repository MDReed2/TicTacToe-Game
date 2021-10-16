const player1 = "X"
const player2 = "O"
let currentPlayer = ""

const spaces = [null, null, null, null, null, null, null, null, null]

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

// console.log(winningOptions)

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

  if (winningPlayer) {
    $("#user-display").text(`${currentPlayer} is the WINNER`)
  }

  console.log(spaces)
}



const winningPlayer = function () {
  // for (let i = 0; i < winningOptions.length; i++) {
  //   if (winningOptions[0][i] === ) {}
  // }

  if (spaces[0][0].innerText === currentPlayer) {
    if (spaces[1][0].innerText === currentPlayer && spaces[2][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[3][0].innerText === currentPlay) {
    if (spaces[4][0].innerText === currentPlayer && spaces[5][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[6][0].innerText === currentPlay) {
    if (spaces[7][0].innerText === currentPlayer && spaces[8][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[0][0].innerText === currentPlay) {
    if (spaces[3][0].innerText === currentPlayer && spaces[6][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[1][0].innerText === currentPlay) {
    if (spaces[4][0].innerText === currentPlayer && spaces[7][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[2][0].innerText === currentPlay) {
    if (spaces[5][0].innerText === currentPlayer && spaces[8][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[0][0].innerText === currentPlay) {
    if (spaces[4][0].innerText === currentPlayer && spaces[8][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  } else if (spaces[2][0].innerText === currentPlay) {
    if (spaces[4][0].innerText === currentPlayer && spaces[6][0].innerText === currentPlayer) {
      console.log(currentPlayer + " is the winner")
    }
  }
}

module.exports = {
  selectBox
}
