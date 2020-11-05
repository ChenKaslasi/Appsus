
export default {
    name: 'side-bar',
    template: `
<section class="side-bar">
    <button class="btn"><span><i class="fa fa-plus icon"></i></span>Compose</button>
    <ul>
        <li><router-link to="/mail/inbox"><i class="icon fas fa-inbox"></i>Inbox</router-link></li>
        <li><router-link to="/mail/starred"><i class="icon fas fa-star"></i>Starred</router-link></li>
        <li><router-link to="/mail/sent"><i class="icon fas fa-paper-plane"></i>Sent</router-link></li>
        <li><router-link to="/mail/drafts"><i class="icon fas fa-sticky-note"></i>Drafts</router-link></li>
    </ul>
</section>
`
}