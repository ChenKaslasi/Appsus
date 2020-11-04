

export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <div class="sender">{{mail.sender}}</div>
        <div class="body">{{mail.body}}</div>
        <div class="sent-at">{{sentAt}}</div>
    </section>
    `,
    computed: {
        sentAt() {
            return new Date(this.mail.sentAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        }
    }
}