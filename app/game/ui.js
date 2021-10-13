let count = 0

const selectBox = function (event) {
  if (count % 2 === 0) {
    $('#' + event.target.id).text('X')
  } else {
    $('#' + event.target.id).text('O')
  }

  count++
}

module.exports = {
  selectBox
}
