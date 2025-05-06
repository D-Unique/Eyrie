import jwt from 'jsonwebtoken'
import { JwtSecret, JwtRefSecret } from './Constant.utility'
import { jwtPayloadType } from '../interface/Auth.interface'

export function generateJwtToken(user:jwtPayloadType) {
        try {
            const accessToken = jwt.sign(user, JwtSecret, { expiresIn: '1h' })
            return accessToken
        }
        catch (err) {
                console.log(err)
        }

}

export function generateRefreshJwtToken(user:jwtPayloadType) {
        try {
            const refreshAccessToken = jwt.sign(user, JwtRefSecret)
            return  refreshAccessToken
        }
        catch (err) {
                console.log(err)
        }
}


export function verifyToken(token: string, secret: string): jwtPayloadType | null {
        try {
          // Attempt to verify the token
          const decoded = jwt.verify(token, secret) as jwtPayloadType;
          return decoded;  // If token is valid, return the decoded payload
        } catch (error) {
          console.log(error)
          return null;
        }
      };

