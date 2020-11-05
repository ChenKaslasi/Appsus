import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailNav from '../cmps/mail-nav.cmp.js';

export default {
  name: 'mail-app',
  template: `
  <section class="mail-app">
    <mail-nav></mail-nav>
    <mail-list :mails="mails"></mail-list>
  </section>
  `,
  data() {
    return {
      mails: null
    }
  },
  created() {
    mailService.getMails()
      .then(mails => this.mails = mails)
  },
  components: {
    mailList,
    mailNav
  }
}