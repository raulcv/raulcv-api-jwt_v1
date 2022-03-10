const { sendEmail } = require('./sendEmail')

/**
 * Prepares to send email
 * @param {string} user - user object
 * @param {string} subject - subject
 * @param {string} htmlMessage - html message
 */
const prepareToSendEmail = (user = {}, subject = '', htmlMessage = '') => {
    user = { name: user.name, email: user.email, verification: user.verification }
    const data = { user, subject, htmlMessage }
    if (process.env.NODE_ENV === 'prod') {
        sendEmail(data, (messageSent) =>
            messageSent
                ? console.log(`Email SENT to: ${user.email}`)
                : console.log(`Email FAILED to: ${user.email}`)
        )
    } else if (process.env.NODE_ENV === 'dev') {
        console.log('************** SEND REGISTER EMAIL init **************')
        console.log(data)
        console.log('************** FINISH SEND REGISTER EMAIL *************')
    }
}

module.exports = { prepareToSendEmail }