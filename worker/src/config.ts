export const AMQP_URI = process.env.AMQP_URI || "amqp://localhost:15672"
export const RABBIT_PREFETCH = Number(process.env.RABBIT_PREFETCH) || 1
export const RABBIT_QUEUES = process.env.RABBIT_QUEUES?.split(",") || ['mailer']

export const WORKERS_AMOUNT = Number(process.env.WORKERS_AMOUNT) || 1

export const MAIL_SERVICE = process.env.MAIL_SERVICE || 'gmail'
export const MAIL_USER = process.env.MAIL_USER || 'user@gmail.com'
export const MAIL_PASS = process.env.MAIL_PASS || 'password'