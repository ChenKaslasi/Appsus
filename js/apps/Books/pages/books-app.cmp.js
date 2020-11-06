import {booksService} from '../services/book-service.js';
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';


export default {
  name: 'books-app',
  components: {
    bookList,
    bookFilter,
    bookDetails
  },
  template: `
  <section class="books-app">
  <div class="books-preview" >
      <book-filter @doFilter="setFilter"/>
      <router-view @remove="removeBook" @selectBook="getBookDetails" :books="booksToShow" />
      
    </div>
  </section>
  `,
  data() {
    return {
      books: null,
      currentBook: null,
      filterBy: null,
    }
  },
  methods: {
    removeBook(id) {
      booksService.remove(id)
      .then(() => console.log('add event bus here !!'))
    },
    getBookDetails(id) {
      booksService.getBookById(id).then(book => this.currentBook = book)
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  },
  computed: {
    booksToShow() {
      if(!this.filterBy) return this.books
      const txt = this.filterBy.byName.toLowerCase();
      const startPrice = this.filterBy.fromPrice;
      const endPrice = this.filterBy.toPrice;
      return this.books.filter(book =>{ 
        return book.title.toLowerCase().includes(txt) &&
         book.listPrice.amount > startPrice && book.listPrice.amount < endPrice})
    },
  },
  created() {
    booksService.getBooks().then(books => this.books = books);
    this.$router.push('/books/list');
  },
  watch: {
    '$route.params'(to){
      if(to.list === undefined) this.$router.push('/books/list');
    }
  }
}