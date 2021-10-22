import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.creatUser)
routes.patch('/users/:email', UserController.updateUser)
routes.delete('/users/:email', UserController.removeUser)
routes.get('/users/:email', UserController.getUserByEmail)

export default routes
