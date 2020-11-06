import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import booksApp from './apps/Books/pages/books-app.cmp.js';
import bookList from './apps/Books/cmps/book-list.cmp.js';
import mailApp from './apps/Mail/pages/mail-app.cmp.js';
import keepApp from './apps/Keep/pages/keep-app.cmp.js';
import mailDetails from './apps/Mail/cmps/mail-details.cmp.js';
import mailList from './apps/Mail/cmps/mail-list.cmp.js';
import bookDetails from './apps/Books/pages/book-details.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: booksApp,
        children: [
            {
                path: ':list',
                component: bookList
            },
            {
                path: ':list/:bookId',
                component: bookDetails
            },
        ]
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: ':folder',
                component: mailList
            },
            {
                path: ':folder/:mailId',
                component: mailDetails
            }
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

