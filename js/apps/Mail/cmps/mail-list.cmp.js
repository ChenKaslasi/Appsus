import mailPreview from './mail-preview.cmp.js';

export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
    <section class="mail-list-container">
        <ul class="mail-list">
            <li v-for="currMail in mails" :key="currMail.id">
                <mail-preview :mail="currMail"></mail-preview>
            </li>
        </ul>
    </section>
    `,
    components: {
        mailPreview
    }
}