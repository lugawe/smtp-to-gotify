import axios from "axios"

export default class {
    constructor(url, token) {
        this.url = url
        this.token = token
        this.messageUrl = `${url}/message?token=${token}`
    }

    async send(title, message, priority = 5) {
        const body = {
            title: title || "No title provided",
            message: message || "No message provided",
            priority
        }
        try {
            await axios.post(this.messageUrl, body)
        } catch (e) {
            console.error("failed to push gotify message", e.response ? e.response.data : e.message)
            throw new Error()
        }
    }
}
