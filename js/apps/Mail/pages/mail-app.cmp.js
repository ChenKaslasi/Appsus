import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
  name: 'mail-app',
  template: `
  <section class="mail-app">
    <h1>mail-app</h1>
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
    mailList
  }
}