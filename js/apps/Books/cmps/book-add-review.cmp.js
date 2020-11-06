import {booksService} from '../services/book-service.js';

export default {
  props: ['book'],
  template: `
  <section class="book-review">
    <button @click="toggleReviewAdd">Add review</button>
    <form v-if="onReviewAdd">
      <label class="name">
        <span>Name:</span>
        <input type="text" placeholder="Add name" v-model="review.name">
      </label>
      <label class="rate" >
      <span>Rating:</span>
       <select v-model="review.rate" >
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
      </label>
      <label class="date">
        <span>Date</span>
        <input type="Date">
      </label>
      <label class="text">
        <span>Your review:</span>
        <textarea v-model="review.txt" cols="100" rows="10"></textarea>
        <button @click.prevent="saveReview">Submit</button>
      </label>
    </form>
  </section>
  `,
  data() {
    return {
      onReviewAdd: false,
      reviewBtnTxt: 'Add review',
      emptyReview: {name: '', rate: 5, readAt: '', txt: ''},
      review: {name: '', rate: 5, readAt: '', txt: ''},
    }
  },
  methods: {
    toggleReviewAdd() {
      this.onReviewAdd = !this.onReviewAdd
    },
    saveReview() {
      booksService.addReview(this.book.id, this.review);
      this.toggleReviewAdd()
      this.$emit('reviewAdd',this.review)
      this.review = this.emptyReview;
    },
  },
}