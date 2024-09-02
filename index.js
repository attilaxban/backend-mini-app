import express from 'express'

const app = express()
app.use(express.json())

app.get('/', async (req,res) => {

     fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => res.send(data))
})


app.listen(3000,() => {
    console.log("App is listening on http://localhost:3000")
})