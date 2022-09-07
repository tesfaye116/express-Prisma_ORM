import express from 'express';

import createUser from '../controllers/userController/createOperation.js'
import readOperation from '../controllers/userController/readOperation.js'
import deleteOperation from '../controllers/userController/deleteOperation.js'
import updateOperation from '../controllers/userController/updateOperation.js'

import {
    createPost,
    readPost,
    updatePost,
    deletePost
} from '../controllers/postController/postController.js'


const router = express.Router();


router.post('/createUser', createUser)
router.get('/users', readOperation)
router.delete('/deleteUser/:id', deleteOperation)
router.put('/updateUser/:id', updateOperation)

//POST CONTENT ROUTE
router.post('/createPost', createPost)
router.get('/posts', readPost)
router.put('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)


export default router



