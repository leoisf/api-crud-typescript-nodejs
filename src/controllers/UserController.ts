import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
  public async getUsers (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async creatUser (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async removeUser (req: Request, res: Response): Promise<Response> {
    const user = await User.findOneAndRemove(
      { email: req.params.email }
    )

    return res.json(user)
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    const user = await User.findOne({ email: req.params.email })

    const newUser = await user.updateOne(req.body)

    return res.json(newUser)
  }
  public async getUserByEmail (req: Request, res: Response): Promise<Response> {
    const user = await User.findOne({ email: req.params.email })

    return res.json(user)
  }
}

export default new UserController()
