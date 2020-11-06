import {booksService} from '../services/book-service.js';

export default {
  props: ['book'],
  template: `
  <section class="add-review">
    <form class="flex column">
      <label class="name">
        <p>Name:</p>
        <input type="text" placeholder="Add name" v-model="review.name">
      </label>
      <label class="rate" >
      <p>Rating:</p>
       <select v-model="review.rate" >
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
      </label>
      <label class="date">
        <p>Date</p>
        <input type="Date">
      </label>
      <label class="text">
        <p>Your review:</p>
        <textarea v-model="review.txt"></textarea>
        <button class="submit-btn" @click.prevent="saveReview"><span>Submit</span></button>
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
    saveReview() {
      booksService.addReview(this.book.id, this.review);
      this.$emit('reviewAdd',this.review)
      this.review = this.emptyReview;
    },
  },
}