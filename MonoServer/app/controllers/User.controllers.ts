import { Request, Response } from 'express';

class UserController {

    static signup(req: Request, res: Response) {
        res.json("signup")
    }

}
export default UserController
