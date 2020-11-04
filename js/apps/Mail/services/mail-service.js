import { utilService } from '../../../services/util-service.js'

const gMails = loadMails()

export const mailService = {
    getMails
}

function getMails() {
    return Promise.resolve(gMails);
}

function loadMails() {
    var mails = utilService.loadFromStorage('mailDB');
    if (!mails || !mails.length) {
        mails = [
            {
                sender: 'Ron',
                subject: 'New subscribe',
                body: 'Welcome back thx',
                isRead: false,
                sentAt: Date.now(),
                id: utilService.makeId()
            },
            {
                sender: 'Mike',
                subject: 'Wassap?',
                body: 'Pick up!',
                isRead: true,
                sentAt: 1551133930594,
                id: utilService.makeId()
            },
        ];
        utilService.storeToStorage('mailDB', mails)
    }
    return mails;
}