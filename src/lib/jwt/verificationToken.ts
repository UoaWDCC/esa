import { sign, verify } from 'jsonwebtoken';
import { env } from 'config/serverEnv';

const SECRET: string = env.PAYLOAD_SECRET;

export function signVerificationToken(payload: { googleId: string; email: string }, expiresIn : '10m') {
  return sign(payload, SECRET, { expiresIn });
}

export function verifyVerificationToken(token: string) {
  try {
    return verify(token, SECRET) as { googleId: string; email: string };
  } catch (err) {
    return null;
  }
}
