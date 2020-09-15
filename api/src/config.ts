export const SERVER_PORT = process.env.SERVER_PORT || 8001

export const JWT_SECRET = process.env.JWT_SECRET || "secret"
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "24 hours"

export const AMQP_URI = process.env.AMQP_URI || `amqp://${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`
export const RABBIT_PREFETCH = Number(process.env.RABBIT_PREFETCH) || 1
export const RABBIT_QUEUES = process.env.RABBIT_QUEUES?.split(',') || ["mailer"]
