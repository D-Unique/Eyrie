import { Request, Response } from 'express';
import { knexDb } from '../database/Mysql.database';
import { HttpResponse } from '../utility/HttpResponse.utility';
import sendMail from '../utility/SendEmail.utility';
import { adminEmail } from '../utility/Constant.utility';
import { Logger } from '../utility/Logger.utility';


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
            return res.json(HttpResponse.OK(null, `house with id ${houseId} appoved`))
        } catch (err) {
            console.log(err)
            return res.json(HttpResponse.InternalServerError())
        }
    }

    static async disapprove(req: Request, res: Response) {
        const houseId = req.houseId
        try {
            if (houseId) {
                knexDb("houses").where('id', '=', houseId).update({ status: 'disapproved' })
            }
            return res.json(HttpResponse.OK(null, `house with id ${houseId} disapproved`))
        } catch (err) {
            console.log(err)
            return res.json(HttpResponse.InternalServerError())
        }
    }


    static async lebelledsold(req: Request, res: Response) {
        const payload = req.payload
        const houseId = req.params.houseId
        
        if (!payload || !houseId) {
            Logger.warning(`Include required middleware to the House.Controller.lebelled route`)
            return res.json(HttpResponse.InternalServerError())
        }
        const record = await knexDb('houses').where({ id: houseId }).first()
        if (record.user_id !== payload.user_id) {
            return res.json(HttpResponse.Unauthorized(`You are not allowed to mark the Property as Sold`))
        }

        if (record.status !== 'approved') {
            return res.json(HttpResponse.UnprocessableEntity(null,`You can only mark Approved Properties as Sold`))
        }
        await knexDb('houses').where({ id: houseId, user_id: payload.user_id }).update({ status: 'sold' })
        Logger.info(`Seller: ${payload.user_email} marked property with ID:${houseId} as SOLD`)
        await sendMail('Eyrie', adminEmail, adminEmail, 'MARKED AS SOLD', `${payload.user_email} Marked Property with Id:${houseId} as SOLD`)
        return res.json(HttpResponse.OK())


    }
        
    }

  


export default UserController
