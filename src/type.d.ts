import { Request } from 'express'
import User from './models/schemas/User.schema'
import { TokenPayload } from './models/requests/User.requests'
declare module 'express' {
  interface Request {
    user?: User
    decode_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
    decoded_email_verified_token?: TokenPayload
  }
}
