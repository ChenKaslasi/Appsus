import { mailService } from '../services/mail-service.js';
import sideBar from '../cmps/mail-side-bar.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailCompose from '../cmps/mail-compose.cmp.js';

export default {
  name: 'mail-app',
  template: `
  <section class="mail-app">
  <side-bar @open="openCompose"></side-bar>
    <main class="main-container">
      <mail-filter @doFilter="setFilter"></mail-filter>
      <router-view v-if="mails" :mails="mailsToShow"></router-view>
      <mail-compose v-if="isCompose" @close="closeCompose"></mail-compose>
    </main>
  </section>
  `,
  data() {
    return {
      mails: null,
      filterBy: null,
      folder: null,
      isCompose: false
    }
  },
  created() {
    mailService.getMails()
      .then(mails => this.mails = mails);
    this.$router.push('/mail/inbox');
  },
  watch: {
    '$route.params'(to) {
      this.folder = to.folder;
      this.filterBy = null;
      if (to.folder === undefined) this.$router.push('/mail/inbox')
    }
  },
  computed: {
    mailsToShow() {
      if (!this.filterBy && !this.folder || this.folder === 'inbox') return this.mails;
      if (this.filterBy) {
        const txt = this.filterBy.byText.toLowerCase();
        return this.mails.filter(mail => mail.subject.toLowerCase().includes(txt) ||
          mail.body.toLowerCase().includes(txt) || mail.sender.toLowerCase().includes(txt));
      } else {
        const folder = this.folder;
        return this.mails.filter(mail => mail[folder]);
      }
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    closeCompose() {
      this.isCompose = false;
    },
    openCompose() {
      this.isCompose = true;
    }
  },
  components: {
    sideBar,
    mailFilter,
    mailCompose
  }
}