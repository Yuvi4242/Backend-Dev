const express = require('express')
const router = express.Router()

const users = [
    { id: 1, name: 'Yuvraj' },
    { id: 2, name: 'Sachin' },
    { id: 3, name: 'Aman' }
]

router.get('/', (req, res) => {
    const { name } = req.query
    if (name) {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(name.toLowerCase())
        )
        return res.json(filtered)
    }
    res.json(users)
})

module.exports = router