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
                sender: 'Mike',
                subject: 'Wassap?',
                body: 'Pick up!',
                isRead: false,
                sentAt: new Date(),
                id: utilService.makeId()
            },
            {
                sender: 'Ron',
                subject: 'New subscribe',
                body: 'Welcome back thx',
                isRead: false,
                sentAt: new Date(),
                id: utilService.makeId()
            }
        ];
        utilService.storeToStorage('mailDB', mails)
    }
    return mails;
}