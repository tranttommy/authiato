const app = require('express')()

app.get('/', (req, res) => {
  res.send({ hello: 'poop' })
})

module.exports = app
