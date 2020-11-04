import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import booksApp from './pages/books-app.cmp.js';
import mailApp from './pages/mail-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';


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
        component: mailApp
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

