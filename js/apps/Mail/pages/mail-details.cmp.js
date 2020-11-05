import { mailService } from '../services/mail-service.js';

export default {
  template: `
    <!-- <div><i class="fas fa-user"></i></div> -->
  <section class="mail-details">
    <div class="details-nav">
      <router-link to="/mail" class="btn"><i class="icon fa fa-arrow-left"></i></router-link>
      <button class="btn" @click="deleteMail()"><i class="icon fas fa-trash"></i></button>
    </div>
    <div>{{mail}}</div>
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
  methods: {
    deleteMail() {
      mailService.removeMail(this.mail.id)
        .then(() => console.log('success'))
        .then(this.$router.push('/mail'))
    }
  }
}