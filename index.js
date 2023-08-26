import MailDev from "maildev"

const SMTP_PORT = process.env.SMTP_PORT || 1025

const maildev = new MailDev({
    smtp: SMTP_PORT,
    disableWeb: true
})

maildev.on("new", (email) => {
    console.log("new email", email)
})
