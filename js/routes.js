import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import booksApp from './apps/Books/pages/books-app.cmp.js';
import mailApp from './apps/Mail/pages/mail-app.cmp.js';
import keepApp from './apps/Keep/pages/keep-app.cmp.js';
import mailDetails from './apps/Mail/pages/mail-details.cmp.js';
import mailCompose from './apps/Mail/pages/mail-compose.cmp.js';


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

