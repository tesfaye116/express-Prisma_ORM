import express from 'express';
import createUser from '../controllers/userController/createOperation.js'
import readOperation from '../controllers/userController/readOperation.js'
import deleteOperation from '../controllers/userController/deleteOperation.js'
import updateOperation from '../controllers/userController/updateOperation.js'

const router = express.Router();


router.post('/createUser', createUser)

router.get('/users', readOperation)

router.delete('/deleteUser/:id', deleteOperation)

router.put('/updateUser/:id', updateOperation)


export default router



