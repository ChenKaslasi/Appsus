
import {utilService} from '../../../services/util-service.js';


const BOOKS_KEY = 'books'
let gBooks = _crateBooks();


export const booksService = {
  getBooks,
  getBookById,
  removeBook,
  addReview,
}

function getBooks() {
  let storageBooks = utilService.loadFromStorage(BOOKS_KEY)
  if (storageBooks) {
    gBooks = storageBooks
  } else {
    gBooks.map(book => {
      book.reviews = []
      return book
    })
  }
  utilService.storeToStorage(BOOKS_KEY, gBooks)
  return Promise.resolve(gBooks)
}

function getBookById(bookId) {
  return Promise.resolve(
    getBooks().then(books => {
      return books.find(book => book.id === bookId)
    })
  )
}

function removeBook(bookId) {
  const idx = gBooks.filter(book => book.id === bookId);
  gBooks.splice(idx, 1);
  utilService.storeToStorage(BOOKS_KEY, gBooks)
  return Promise.resolve()
}

function addReview(bookId, review) {
  review.id = utilService.makeId();
  getBookById(bookId)
    .then(book => {
      book.reviews.push(review)
      utilService.storeToStorage(BOOKS_KEY, gBooks)
    })
}

function _crateBooks() {
  const books = utilService.loadFromStorage(BOOKS_KEY)
  if(books) return books;
  else {
    const defaultBooks = 
    [
      {
        "id": "OXeMG8wNskc",
        "title": "Nature and Value",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "pageCount": 713,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2020/07/8ecceb85-a50f-4e5d-a739-bec11f2373c5.jpeg",
        "language": "en",
        "listPrice": {
          "amount": 109,
          "currencyCode": "EUR",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "JYOJa2NpSCq",
        "title": "TYLL",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "pageCount": 129,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2020/08/tyll-4.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 44,
          "currencyCode": "EUR",
          "isOnSale": true
        },
        "reviews": []
      },
      {
        "id": "1y0Oqts35DQ",
        "title": "1000 Black Umbrellas",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "pageCount": 972,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2016/08/SquareSpace6.jpg",
        "language": "he",
        "listPrice": {
          "amount": 108,
          "currencyCode": "ILS",
          "isOnSale": false
        },        
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "kSnfIJyikTP",
        "title": "The Everlasting",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
        "pageCount": 303,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2020/07/The-Everlasting-final-cover.jpg",
        "language": "en",
        "listPrice": {
          "amount": 30,
          "currencyCode": "EUR",
          "isOnSale": true
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "f4iuVmbuKCC",
        "title": "Schisms",
        "subtitle": "Dead Astronauts",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "pageCount": 337,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2020/07/91bh9jVbRZL.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 19,
          "currencyCode": "USD",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "U2rfZO6oBZf",
        "title": "The Essential Goethe",
        "subtitle": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
        "pageCount": 748,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2016/03/A1Pim60eMZL.jpg",
        "language": "en",
        "listPrice": {
          "amount": 91,
          "currencyCode": "USD",
          "isOnSale": true
        },
        "reviews": []
      },
      {
        "id": "xI0wrXaaAcq",
        "title": "All Things Cease to Appear",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        "pageCount": 65,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2016/03/Image-2016-03-17-at-2.26.00-PM.png",
        "language": "he",
        "listPrice": {
          "amount": 90,
          "currencyCode": "USD",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "9laHCEdSpFy",
        "title": "The Visible Man: A Novel",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "iText in Action, Second Edition offers an introduction and a practical guide to iText and the internals of PDF. While at the entry level iText is easy to learn, there's an astonishing range of things you can do once you dive below the surface. This book lowers the learning curve and, though numerous innovative and practical examples, unlocks the secrets hidden in Adobe's PDF Reference. The examples are in Java but they can be easily adapted to .NET using one of iText's .NET ports: iTextSharp or iText.NET.",
        "pageCount": 299,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2015/10/visible-man.jpg",
        "language": "he",
        "listPrice": {
          "amount": 176,
          "currencyCode": "EUR",
          "isOnSale": false
        },
        "reviews": []
      },
      {
        "id": "nGhVwZvGCGp",
        "title": "The Pale King",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "SNA and TCP/IP Enterprise Networking shows the reader how enterprise networking evolved, what approaches and techniques can be used today, and where tomorrow's trends lie, illustrating among others Web-to-SNA connectivity and Java based integration approaches.",
        "pageCount": 803,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/2011/03/cubierta_Pale.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 116,
          "currencyCode": "USD",
          "isOnSale": true
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "Q8Q9Lsd03BD",
        "title": "Stolen World",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "Learn all about this new open source version control application and why it is replacing CVS as the standard. Examples demonstrate how to customize features to deal with day-to-day problems.",
        "pageCount": 891,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/amazon/stolen_world.jpg",
        "language": "en",
        "listPrice": {
          "amount": 145,
          "currencyCode": "EUR",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "bd7a76kARao",
        "title": "The Colossus of Maroussi",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "This glossary offers a complete collection of technical terms and acronyms used in the networking industry.",
        "pageCount": 86,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/amazon/the_colossus_of_maroussi.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 157,
          "currencyCode": "ILS",
          "isOnSale": true
        },
        "reviews": []
      },
      {
        "id": "qKyG0vqeO3e",
        "title": "Winchell",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "Internet BBSs: A Guided Tour provides in-depth coverage of the new world of true BBSs now available world-wide. It is a valuable resource for anyone currently using the Internet.",
        "pageCount": 882,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://bookcoverarchive.com/wp-content/uploads/amazon/winchell.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 57,
          "currencyCode": "USD",
          "isOnSale": true
        },
        "reviews": []
      },
      {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "Develop Notes and Domino Web applications by providing advanced LotusScript code for direct use in your programs. This book emphasizes practical, useable code and solutions to common Notes programming problems.",
        "pageCount": 598,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
          "amount": 167,
          "currencyCode": "ILS",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "5z2s9pDXAYj",
        "title": "ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "Planning and Managing ATM Networks covers strategic planning, initial deployment, overall management, and the day-to-day operation of ATM networks.",
        "pageCount": 608,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
          "amount": 150,
          "currencyCode": "USD",
          "isOnSale": true
        },
        "reviews": []
      },
      {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "Client/Server Appliactions on ATM Networks discusses ATM as the key technology for transforming the enterprise network from data-only to an integrated data, voice, video, image and multimedia corporate infrastructure.",
        "pageCount": 583,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
          "amount": 58,
          "currencyCode": "ILS",
          "isOnSale": true
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "Whether you're writing a desktop app, spinning up a rich web interface, or pushing code to a mobile phone, graphics programming should be easier, and more fun, than it currently is.",
        "pageCount": 497,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
          "amount": 78,
          "currencyCode": "USD",
          "isOnSale": false
        },
        "reviews": []
      },
      {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "Microsoft Entity Framework in Action introduces the Entity Framework to developers working in .NET who already have some knowledge of ADO.NET.",
        "pageCount": 804,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
          "amount": 118,
          "currencyCode": "ILS",
          "isOnSale": false
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "ASP.NET Web Parts in Action is a must read book for every developer who wants to extend his knowledge of the ASP.NET framework.\" -- Simon Busoli, DotNetSlackers.com",
        "pageCount": 231,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
          "amount": 60,
          "currencyCode": "EUR",
          "isOnSale": false
        },
        "reviews": []
      },
      {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "Sass and Compass in Action is the definitive guide to stylesheet authoring using these two revolutionary tools. Written for both designers and developers, this book demonstrates the power of both Sass and Compass through a series of examples that address common pain points associated with traditional stylesheet authoring. ",
        "pageCount": 652,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
          "amount": 110,
          "currencyCode": "USD",
          "isOnSale": true
        },
        "reviews": [
          {name: 'Cinar Spencer', rate: 5, readAt: '2020-11-20', txt: 'I saw one of these in Bhutan and I bought one.'},
          {name: 'George Reyes', rate: 2, readAt: '', txt: 'The box this comes in is 4 yard by 5 inch and weights 12 pound!'},
          {name: 'Abby Bird', rate: 1, readAt: '2018-5-25', txt: 'eard about this on folktronica radio, decided to give it a try.'},
        ]
      },
      {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
          "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "Core OWL 5.0 dives under the surface and into the OWL source code itself. You'll see what new capabilities OWL 5.0 offers the OWL programmer. You'll gain a deeper understanding of what OWL does on your behalf such as the OWL messaging system and its message maps.",
        "pageCount": 904,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 186,
          "currencyCode": "ILS",
          "isOnSale": true
        },
        "reviews": []
      }
    ]
    utilService.storeToStorage(BOOKS_KEY, defaultBooks);
    return defaultBooks;
  }
};

