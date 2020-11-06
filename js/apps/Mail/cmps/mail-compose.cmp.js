export default {
  template: `
  <section class="mail-compose">
    <header class="compose-header">
    <h5>New Message</h5>
    <div class="header-controls">
    <button class="btn close-btn" @click="emitCloseCompose"><i class="icon fas fa-times"></i></button> 
    </div>
  </header>
      <div class="input-container">
    <input v-model="recipient" ref="recipientInput" type="text" name="recipient" @input="print" placeholder="Recipients" @focus="changePlaceholder(1)" @blur="changePlaceholder(0)"/>
    <input v-model="subject" type="text" name="subject" placeholder="Subject"/>
    <textarea v-model="txt" type="text" name="mailTextArea" rows="15"></textarea>
    </div>
  </section>
  `,
  data() {
    return {
      recipient: null,
      subject: null,
      txt: null
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
      console.log(this.recipient,
        this.subject,
        this.txt);
    }
  }
}