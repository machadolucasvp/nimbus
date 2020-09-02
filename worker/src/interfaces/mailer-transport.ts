export interface MailerTransport {
  send: (mail: Object) => Promise<any>
}