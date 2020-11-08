import { mailService } from '../services/mail-service.js';
import mailPreview from './mail-preview.cmp.js';

export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
    <section class="mail-list-container">
        <ul class="mail-list">
            <li v-for="currMail in mails" :key="currMail.id">
                <mail-preview :mail="currMail" @click.native="mailClicked(currMail)"></mail-preview>
            </li>
        </ul>
        <button class="write-btn" @click="emitOpenCompose"><i class="icon fas fa-pen"></i></button>
    </section>
    `,
    components: {
        mailPreview
    },
    methods: {
        mailClicked(mail) {
            if (!mail.isRead) {
                mail.isRead = true;
                mailService.saveMailsToStorage()
            }
            const folder = this.$route.params.folder;
            this.$router.push(`/mail/${folder}/${mail.id}`);
        },
        emitOpenCompose() {
            this.$emit('open')
        }
    }
}