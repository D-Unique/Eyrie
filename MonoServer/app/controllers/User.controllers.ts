import { Request, Response } from 'express';
import { knexDb } from '../database/Mysql.database';
import { HttpResponse } from '../utility/HttpResponse.utility';
import sendMail from '../utility/SendEmail.utility';
import { adminEmail } from '../utility/Constant.utility';


class UserController {

    static async buy(req: Request, res: Response) {
        

        res.json({ message: 'Buyer' })


    }
    static async sell(req: Request, res: Response) {
        res.json({ message: 'seller' })

    }
    static async admin(req: Request, res: Response) {
        res.json({ message: 'admin' })

    }

    static async approve(req: Request, res: Response) {
        const payload = req.payload
        const houseId = req.params.houseId
        const email = payload ? payload.user_email : ''
        try {
            if (houseId) {
                await knexDb("houses").where('id', '=', houseId).update({ status: 'approved' })
            }
            await sendMail('Eyrie', adminEmail, email, 'Listing Approval', "Hello Dear, Your Postings has been approved")
            res.json(HttpResponse.OK(null, `house with id ${houseId} appoved`))
        } catch (err) {
            console.log(err)
            res.json(HttpResponse.InternalServerError())
        }
    }

    static async disapprove(req: Request, res: Response) {
        const houseId = req.houseId
        try {
            if (houseId) {
                knexDb("houses").where('id', '=', houseId).update({ status: 'disapproved' })
            }
            res.json(HttpResponse.OK(null, `house with id ${houseId} disapproved`))
        } catch (err) {
            console.log(err)
            res.json(HttpResponse.InternalServerError())
        }
    }
        
    }

  


export default UserController
