import { mailService } from '../services/mail-service.js';

export default {
  template: `
    <!-- <div><i class="fas fa-user"></i></div> -->
  <section class="mail-details">
    <div>
      <i class="fas fa-arrow-left"></i>
      <i class="fas fa-trash trash"></i>
    </div>
    <div v-if="mail">{{mail}}</div>
  </section>
  `,
  data() {
    return {
      mail : null
    }
  },
  created() {
    const id = this.$route.params.mailId;
    mailService.getMailById(id)
      .then(mail => this.mail = mail)
  }
}