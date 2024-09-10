
import jwt  from 'jsonwebtoken';

export const createToken = (
    jsonPayload: { userEmail: string; role: string },
    secret: string,
    expiresIn: string
  ) => {
    return jwt.sign(jsonPayload, secret, { expiresIn });
  };