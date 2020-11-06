import { utilService } from '../../../services/util-service.js'

const gMails = loadMails()

export const mailService = {
    getMails,
    saveMailsToStorage,
    removeMail,
    getMailById,
    getNumOfUnread
}

function getNumOfUnread() {
    const num = gMails.reduce((counter, mail) => {
        if (!mail.isRead) counter++;
        return counter;
    }, 0);
    return Promise.resolve(num);
}

function getMailById(id) {
    const mail = gMails.find(currMail => currMail.id === id)
    return Promise.resolve(mail)
}

function removeMail(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId);
    gMails.splice(idx, 1);
    saveMailsToStorage()
    return Promise.resolve()
}

function saveMailsToStorage() {
    utilService.storeToStorage('mailDB', gMails)
}

function getMails() {
    return Promise.resolve(gMails);
}

function loadMails() {
    var mails = utilService.loadFromStorage('mailDB');
    if (!mails || !mails.length) {
        mails = [
            {
                sender: 'eBay',
                email: 'ebay@reply5.ebay.com',
                subject: 'New subscribe',
                body: 'Welcome back thx',
                isRead: false,
                starred:false,
                sent:true,
                draft:false,
                sentAt: Date.now(),
                id: utilService.makeId()
            },
            {
                sender: 'Mike',
                email: 'mike@gmail.com',
                subject: 'Wassap?',
                body: 'Pick up!',
                inbox:true,
                isRead: true,
                starred:true,
                sent:false,
                draft:false,
                sentAt: 1551133930594,
                id: utilService.makeId()
            },
        ];
        utilService.storeToStorage('mailDB', mails)
    }
    return mails;
}