import { mailService } from '../services/mail-service.js'

export default {
  template: `
  <section class="mail-compose">
    <header class="compose-header">
    <h5>New Message</h5>
    <div class="header-controls">
    <button class="btn close-btn" @click="emitCloseCompose"><i class="icon fas fa-times"></i></button> 
    </div>
    </header>
    <form class="input-container">
    <input v-model="mailToEdit.to" ref="recipientInput" type="text" name="recipient" @input="print" placeholder="Recipients" @focus="changePlaceholder(1)" @blur="changePlaceholder(0)"/>
    <input v-model="mailToEdit.subject" type="text" name="subject" placeholder="Subject"/>
    <textarea v-model="mailToEdit.body" type="text" name="mailBody" rows="15"></textarea>
    <footer class="form-footer">
      <button class="btn btn-send" @click="saveMail">Send</button>
      <!-- <button class="btn btn-trash" @click="deleteMail()"><i class="icon fas fa-trash"></i></button> -->
    </footer>
  </form>
  </section>
  `,
  data() {
    return {
      mailToEdit: {
        sender: 'puki',
        email: 'puki@appsus.com',
        to: '',
        subject: '',
        body: '',
        isRead: false,
        starred: false,
        sent: true,
        draft: false,
        sentAt: Date.now(),
        id: ''
      }
    }
  },
  mounted() {
    this.$refs.recipientInput.focus();
    console.log(this.$refs.recipientInput.placeholder);

  },
  methods: {
    changePlaceholder(num) {
      if (num === 1) this.$refs.recipientInput.placeholder = 'To'
      else this.$refs.recipientInput.placeholder = 'Recipients'
    },
    emitCloseCompose() {
      this.$emit('close');
    },
    print() {
      console.log(this.mailToEdit)
    },
    saveMail() {
      mailService.save(this.mailToEdit)
      this.getEmptymail();
    },
    getEmptymail() {
      this.mailToEdit = {
        sender: 'puki',
        email: 'puki@appsus.com',
        to: '',
        subject: '',
        body: '',
        isRead: false,
        starred: false,
        sent: true,
        draft: false,
        sentAt: Date.now(),
        id: ''
      }
    }
  },
  // deleteMail() {
  //   mailService.removeMail(this.mail.id)
  //       .then(() => console.log('success'))
  // }
}