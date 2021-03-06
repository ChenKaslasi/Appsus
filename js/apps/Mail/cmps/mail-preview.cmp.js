import { mailService } from '../services/mail-service.js';

export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <section class="mail-preview" :class="isRead"  @mouseover="toggleShouldShowButtons" @mouseout="toggleShouldShowButtons">
         <button class="btn starred-btn" @click.stop="toggleStarred()"><i class="icon" :class="isStarred"></i></button>
        <div class="mail-sender">{{mail.sender}}</div>
        <div class="mail-body"><span class="mail-subject">{{mail.subject}}</span> - {{textToShow}}</div>
        <div class="mail-sent-at">{{sentAt}}</div>
        <div v-show="shouldShowButtons" class="buttons-container">
            <button class="btn" @click.stop="deleteMail()"><i class="icon fas fa-trash trash"></i></button>
            <button class="btn" @click.stop="toggleRead()"><i class="icon fa" :class="isOpen"></i></button>
        </div>
    </section>
    `,
    data() {
        return {
            shouldShowButtons: false,
        }
    },
    computed: {
        sentAt() {
            if (new Date(Date.now()).toDateString().slice(4, 10) === new Date(this.mail.sentAt).toDateString().slice(4, 10)) {
                return new Date(this.mail.sentAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            } else return new Date(this.mail.sentAt).toDateString().slice(4, 10)
        },
        isRead() {
            return { 'read': this.mail.isRead }
        },
        isStarred() {
            if (this.mail.starred) return 'fas fa-star starred'
            else return 'far fa-star'
        },
        isOpen() {
            if (this.mail.isRead) return 'fa-envelope-open';
            else return 'fa-envelope';
        },
        textToShow() {
            const txt = this.mail.body;
            if (txt.length > 50) {
                return txt.substring(0, 50) + "...";
            } else return txt;
        },
    },
    methods: {
        toggleShouldShowButtons() {
            this.shouldShowButtons = !this.shouldShowButtons;
        },
        toggleStarred() {
            this.mail.starred = !this.mail.starred;
            mailService.saveMailsToStorage();
        },
        toggleRead() {
            this.mail.isRead = !this.mail.isRead;
            mailService.saveMailsToStorage();
        },
        deleteMail() {
            mailService.removeMail(this.mail.id)
                .then(() => console.log('success'))
        }
    },
}