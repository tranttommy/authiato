const PORT = process.env.PORT || 2309

require('./app').listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
