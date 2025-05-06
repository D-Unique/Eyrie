import crypto from "crypto"

export default function generateSecureRandomString(length: number) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}

console.log(generateSecureRandomString(16))
