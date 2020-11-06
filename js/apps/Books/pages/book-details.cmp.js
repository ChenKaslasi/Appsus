import bookDescription from '../cmps/book-description.cmp.js';
import bookAddReview from '../cmps/book-add-review.cmp.js';
import bookShowReviews from '../cmps/book-show-reviews.cmp.js';
import {booksService} from '../services/book-service.js';
// import {eventBus, EVENT_SHOW_MSG} from '../services/event-bus.service.js'


export default {
  components: {
    bookDescription,
    bookAddReview,
    bookShowReviews,
  },
  template: `
  <section class="book-details" v-if="book">
    <div class="book-container">
      <div class="book-image">
        <img :src="book.thumbnail">
      </div>
      <div class="book-data">
        <ul class="book-props">
          <li class="book-title">{{book.title}}</li>
          <li class="title-details">authors: {{authors}}</li>
          <li class="title-details">catagories:{{catagories}}</li>
          <li class="title-details">language: {{book.language}}</li>
          <li :class="evaluatePrice">{{getPrice}}{{getCurrency}}</li>
        </ul>
        <book-description :description="book.description"/>
        <ul class="book-computed">
            <li class="book-length">{{evaluateBookLength}}</li>
            <li class="book-seniority">{{evaluateBookSeniority}}</li>
            <li class="book-onsale" v-if="isOnSale">On sale!!</li>
        </ul>
      </div>
    </div>
    <div class="reviews-container flex">
      <book-add-review :book="book" class="book-review" @reviewAdd="reviewAdded"/>
      <book-show-reviews :reviews="book.reviews"/>
    </div>
  </section>
  `,
  data() {
    return {
      book: null,
    }
  },
  methods: {
    reviewAdded(review) {
      let parsedReview = JSON.parse(JSON.stringify(review)) 
      this.book.reviews.push(parsedReview)
      this.reviewSavedSuccess()
    },

    reviewSavedSuccess() {
    const msg = {txt: 'Review Saved Successffully',type: 'success'}
    // eventBus.$emit(EVENT_SHOW_MSG, msg)
    }
  },
  computed: {
    evaluateBookLength() {
      let pageCount = this.book.pageCount
      return (pageCount > 500) ? 'Long reading' : (pageCount > 200) ? 'Decent reading' : 'Light reading' 
    },
    evaluateBookSeniority() {
      let publishDiff = (new Date().getFullYear()) - this.book.publishedDate;
      if(publishDiff > 10) return 'Veteran Book';
      if(publishDiff < 1) return 'New!'; 
      else return 'Lately published'
    },
    getPrice() {
      return this.book.listPrice.amount
    },
    getCurrency() {
      switch(this.book.listPrice.currencyCode) {
        case 'EUR': return '€'
        case 'USD': return '$'
        case 'ILS': return '₪'
      }
    },
    evaluatePrice() {
      let price = this.book.listPrice.amount;
      if(price > 150) return {pricey: true};
      if(price < 20) return {cheap: true};
    },
    isOnSale() {
      return this.book.listPrice.isOnSale;
    },
    authors() {
      return this.book.authors.join("");
    },
    catagories() {
      return this.book.categories.join(",");
    },
    
  },
  created() {
    const id = this.$route.params.bookId
    booksService.getBookById(id)
    .then(book => {
      this.book = book
    })
  },
}