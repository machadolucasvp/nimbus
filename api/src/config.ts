export const SERVER_PORT = process.env.JWT_SECRET || 8001

export const JWT_SECRET = process.env.JWT_SECRET || 'somethinghashed'
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "24 hours"

export const AMQP_URI = 'amqp://localhost:15672/'
export const RABBIT_PREFETCH = 1
export const RABBIT_QUEUES = ['mailer']