export const SERVER_PORT = process.env.JWT_SECRET || 8000

export const JWT_SECRET = process.env.JWT_SECRET || 'somethinghashed'
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "24 hours"