import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import sideBar from '../cmps/mail-side-bar.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailInbox from '../cmps/mail-inbox.cmp.js';

export default {
  name: 'mail-app',
  template: `
  <section class="mail-app">
    <mail-filter @doFilter="setFilter"></mail-filter>
    <main class="main-container">
    <side-bar></side-bar>
    <router-view :mails="mailsToShow"></router-view>
    </main>
  </section>
  `,
  data() {
    return {
      mails: null,
      filterBy: null
    }
  },
  created() {
    mailService.getMails()
      .then(mails => this.mails = mails)
  },
  computed: {
    mailsToShow() {
      if (!this.filterBy) return this.mails;
      const txt = this.filterBy.byText.toLowerCase();
      return this.mails.filter(mail => mail.subject.toLowerCase().includes(txt) || mail.body.toLowerCase().includes(txt) || mail.sender.toLowerCase().includes(txt));
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  },
  components: {
    mailList,
    sideBar,
    mailFilter,
    mailInbox
  }
}

{/* <mail-list :mails="mailsToShow"></mail-list> */}