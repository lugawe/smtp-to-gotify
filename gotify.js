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
        const result = await axios.post(this.messageUrl, body)
        if (result.status > 299 || result.status < 200) {
            throw new Error("failed to push gotify message", result.data)
        }
    }
}
