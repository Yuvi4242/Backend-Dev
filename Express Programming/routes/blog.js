const express = require('express')
const router = express.Router()

let posts = [
    { id: 1, title: 'First Post', content: 'Hello World' }
]

router.get('/', (req, res) => {
    res.render('blog/index', { posts })
})

router.get('/new', (req, res) => {
    res.render('blog/new')
})

router.post('/', (req, res) => {
    const { title, content } = req.body
    const newPost = {
        id: posts.length + 1,
        title,
        content
    }
    posts.push(newPost)
    res.redirect('/blog')
})

router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id)
    if (!post) return res.redirect('/blog')
    res.render('blog/show', { post })
})

module.exports = router