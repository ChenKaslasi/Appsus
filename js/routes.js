import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import booksApp from './apps/Books/pages/books-app.cmp.js';
import mailApp from './apps/Mail/pages/mail-app.cmp.js';
import keepApp from './apps/Keep/pages/keep-app.cmp.js';
import mailDetails from './apps/Mail/cmps/mail-details.cmp.js';
import mailList from './apps/Mail/cmps/mail-list.cmp.js';
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
            {
                path: 'inbox',
                component: mailList
            },
            {
                path: 'starred',
                component: mailList
            },
            {
                path: 'sent',
                component: mailList
            },
            {
                path: 'drafts',
                component: mailList
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

