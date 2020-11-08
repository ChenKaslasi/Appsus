import { utilService } from '../../../services/util-service.js'

const gMails = loadMails()

export const mailService = {
    getMails,
    saveMailsToStorage,
    removeMail,
    getMailById,
    getNumOfUnread,
    getEmptymail,
    save
}

function save(mail) {
    if(mail.id){
        const mailIdx = gMails.findIndex(currMail=>mail.id===currMail.id)
        gMails.splice(mailIdx,1,mail)
    }else{
        mail.id = utilService.makeId();
        gMails.unshift(mail);
        saveMailsToStorage()
        console.log(gMails);
    }
    // return Promise.resolve(mail)
}

function getEmptymail() {
    return {
        sender: 'puki',
        email: 'puki@appsus.com',
        to:'',
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
                sender: 'Action required',
                email: 'noreply@github.com',
                subject: 'New Google Cloud Platform',
                body: 'Hi @Puki, We have detected that you recently authenticated to GitHub using an older version of Git for Windows. After November 13th, 2020 GitHub is changing how users authenticate when using Git for Windows, and willrequire the use of a web browser to authenticate to GitHub. To be able to login via web browser, userswill need to update to the latest version of Git for Windows. You can download the latest version at:',
                isRead: false,
                starred: false,
                sent: false,
                draft: false,
                sentAt: 181545540594,
                id: utilService.makeId()
            },
            {
                sender: 'Google Cloud Platform',
                email: 'noreply@taasuka.gov.il',
                subject: 'New Google Cloud Platform',
                body: 'Hello Google Cloud Platform Customer, We are sending this message to let you know about the following updates to the Google Cloud Platform Subprocessors list:We are adding Canonical Group Limited and its affiliates We are adding SGS Labor de Mexico, S. de R.L. de C.V. We are adding Achieve Internet, Inc. We are adding SID Global Solutions, LLCYou can find information about the tasks our Subprocessors perform on our Google Cloud Platform Subprocessors list.',
                isRead: true,
                starred: false,
                sent: false,
                draft: false,
                sentAt: 1751545540594,
                id: utilService.makeId()
            },
            {
                sender: 'Fox Racing',
                email: 'reply@email.foxracing.com',
                subject: 'Meet the V3 RS Helmet',
                body: 'NEED HELP? CUSTOMER SUPPORT CENTER 1-888-369-7223 Free Shipping offer is good for Standard Ground Shipping in the mainland United States only. If you choose Express Shipping, additional charges will apply.',
                isRead: true,
                starred: false,
                sent: false,
                draft: false,
                sentAt: 1651545540594,
                id: utilService.makeId()
            },
            {
                sender: 'eBay',
                email: 'ebay@reply5.ebay.com',
                subject: 'Upgrade to a smart home',
                body: 'Learn More to protect yourself from Spoof (fake) e-mails eBay International AG sent this e-mail to you at eladr14@gmail.com because your Notification Preferences indicate that you want to receive information about Newsletters, Promotions & Events.',
                isRead: false,
                starred: false,
                sent: false,
                draft: false,
                sentAt: 1551545540594,
                id: utilService.makeId()
            },
            {
                sender: 'Mike',
                email: 'mike@gmail.com',
                subject: 'Wassap?',
                body: 'Pick up!',
                isRead: true,
                starred: true,
                sent: false,
                draft: false,
                sentAt: 1551133930594,
                id: utilService.makeId()
            },
        ];
        utilService.storeToStorage('mailDB', mails)
    }
    return mails;
}