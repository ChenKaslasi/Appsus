
export default {
    name: 'side-bar',
    template: `
<section class="side-bar">
    <button class="compose-btn" @click="emitOpenCompose"><span><i class="fa fa-plus icon"></i></span>Compose</button>
    <ul>
        <li class="btn-like"><router-link to="/mail/inbox"><i class="icon fas fa-inbox"></i>Inbox</router-link></li>
        <li class="btn-like"><router-link to="/mail/starred"><i class="icon fas fa-star"></i>Starred</router-link></li>
        <li class="btn-like"><router-link to="/mail/sent"><i class="icon fas fa-paper-plane"></i>Sent</router-link></li>
        <li class="btn-like"><router-link to="/mail/drafts"><i class="icon fas fa-sticky-note"></i>Drafts</router-link></li>
    </ul>
</section>
`,
    methods: {
        emitOpenCompose() {
            this.$emit('open')
        }
    }
}