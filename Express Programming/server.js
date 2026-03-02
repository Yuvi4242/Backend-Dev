const express = require('express')
const bodyParser = require('body-parser')
const responseTime = require('./middleware/responseTime')
const usersRoute = require('./routes/users')
const blogRoute = require('./routes/blog')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(responseTime)

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/users', usersRoute)
app.use('/blog', blogRoute)

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/contact', (req, res) => {
    res.send(`Received: ${req.body.name} - ${req.body.message}`)
})

app.get('/gallery', (req, res) => {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
    res.render('gallery', { images })
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})