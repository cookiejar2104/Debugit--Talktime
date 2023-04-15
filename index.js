const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname, 'posts.html'))
  })
app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'details.html'))
  })
  app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, 'feedback.html'))
  })


app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})