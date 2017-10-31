import express from 'express'
import helpers from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// Expose the public directory containing the Webpack
// client bundle as a static folder to incoming HTTP requests.
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = helpers.createStore()
  // Do some logic to initialize and load data into the store
  res.send(helpers.renderer(req, store)).status(200)
})

app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`))
