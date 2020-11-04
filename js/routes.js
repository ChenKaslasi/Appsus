import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import booksApp from './apps/Books/pages/books-app.cmp.js';
import mailApp from './apps/Mail/pages/mail-app.cmp.js';
import keepApp from './apps/Keep/pages/keep-app.cmp.js';
import mailDetails from './apps/Mail/pages/mail-details.cmp.js';
import mailCompose from './apps/Mail/cmps/mail-compose.cmp.js';
// import mailInbox from './apps/Mail/cmps/mail-inbox.cmp.js';
// import mailStarred from './apps/Mail/cmps/mail-starred.cmp.js';
// import mailSent from './apps/Mail/cmps/mail-sent.cmp.js';
// import mailDrafts from './apps/Mail/cmps/mail-drafts.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: booksApp
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            // {
            //     path: 'inbox',
            //     component: mailInbox
            // },
            // {
            //     path: 'starred',
            //     component: mailStarred
            // },
            // {
            //     path: 'sent',
            //     component: mailSent
            // },
            // {
            //     path: 'drafts',
            //     component: mailDrafts
            // },
            {
                path: 'compose',
                component: mailCompose
            },
            {
                path: ':mailId',
                component: mailDetails
            },
        ]
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/about',
        component: aboutPage
    },
]



export const myRouter = new VueRouter({ routes: myRoutes })

