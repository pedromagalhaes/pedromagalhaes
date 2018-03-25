const express = require('express')

const app = express()
app.use(express.json()) // piece of middleware
const logger = require('./modules/logger')

const courses = [
  {
    id: 1,
    name: 'course 1'
  },
  {
    id: 2,
    name: 'course 2'
  },
  {
    id: 3,
    name: 'course 3'
  }
]

// home
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// http://localhost:3000/api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) {
    res.status(404).send('The course with the give ID was not found.')
  }
  res.send(course)
  // res.send(req.query)
  // res.send(req.params.id)
})

// post a new course, check postman
app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1, // id from database
    name: req.body.name
  }
  courses.push(course)
  res.send(course)
})

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params)
})


// setup node environment
// on windows, set PORT=5000
// on mac, export PORT=5000
const port = process.env.PORT || 3000
app.listen(port, () => logger(`Listening on port ${port}...`))
