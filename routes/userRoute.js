const express = require('express')
const {getUser, addUser, updateUser, deleteUser} = require('../controllers/userController')

const router = express.Router()
router.get('/get',getUser)
router.post('/post',addUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports = router