import { mailService } from '../services/mail-service.js';
import mailNav from './mail-side-bar.cmp.js';

export default {
  template: `
  <section class="mail-details">
    <nav class="btn-nav">
      <router-link to="/mail" class="btn"><i class="icon fa fa-arrow-left"></i></router-link>
      <button class="btn trash" @click="deleteMail()"><i class="icon fas fa-trash"></i></button>
    </nav>
    <main v-if="mail" class="main-content">
      <h2>{{mail.subject}}</h2>
      <header class="mail-header">
        <div class="senderDetails">
          <span class="mailSender">{{mail.sender}}</span>
          <span class="Mailemail">{{senderEmail}}</span>
        </div>
        <div class="mail-options">
          <button class="btn"><i class="icon fas fa-reply"></i></button>
        </div>
      </header>
      <div class="mail-body">
        {{mail.body}}
      </div>
    </main>
  </section>
  `,
  data() {
    return {
      mail: null
    }
  },
  created() {
    const id = this.$route.params.mailId;
    mailService.getMailById(id)
      .then(mail => this.mail = mail)
  },
  computed: {
    senderEmail() {
      return `<${this.mail.email}>`;
    }
  },
  methods: {
    deleteMail() {
      mailService.removeMail(this.mail.id)
        .then(() => console.log('success'))
        .then(this.$router.push('/mail'))
    }
  },
  components: {
    mailNav
  }
}