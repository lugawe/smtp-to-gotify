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
        return await axios.post(this.messageUrl, body)
    }
}
