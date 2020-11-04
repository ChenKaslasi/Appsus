

export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <section class="mail-preview" :class="isRead">
        <div class="sender">{{mail.sender}}</div>
        <div class="body">{{mail.subject}} - {{mail.body}}</div>
        <div class="sent-at">{{sentAt}}</div>
    </section>
    `,
    computed: {
        sentAt() {
            if (new Date(Date.now()).toDateString().slice(4, 10) === new Date(this.mail.sentAt).toDateString().slice(4, 10)) {
                return new Date(this.mail.sentAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            } else return new Date(this.mail.sentAt).toDateString().slice(4, 10)
        },
        isRead() {
            return {'is-read': this.mail.isRead}
        }
    }
}