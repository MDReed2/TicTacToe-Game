// require the getFormFields function, to get the data from our forms
// const getFormFields = require('../../lib/get-form-fields')

// require out api auth functions
// const api = require('./api')

// require ui functions to update the page
const ui = require('./ui')

const onBoxSelection = function (event) {
  event.preventDefault()

  const boxSelection = event

  ui
    .selectBox(boxSelection)
}


module.exports = {
  onBoxSelection
}
