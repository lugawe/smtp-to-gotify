import "dotenv/config"
import MailDev from "maildev"
import Gotify from "./gotify.js"

const EMAIL_SMTP_PORT = process.env.EMAIL_SMTP_PORT || 1025

const GOTIFY_URL = process.env.GOTIFY_URL
const GOTIFY_TOKEN = process.env.GOTIFY_TOKEN

const maildev = new MailDev({
    smtp: EMAIL_SMTP_PORT,
    disableWeb: true
})

const gotify = new Gotify(GOTIFY_URL, GOTIFY_TOKEN)

maildev.on("new", async (email) => {
    try {
        await gotify.send(email.subject, email.text)
    } catch (e) {
        console.error("failed to forward email", e.message)
    }
})

maildev.listen()
