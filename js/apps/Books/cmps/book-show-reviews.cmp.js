export default {
  props: ['reviews'],
  template: `
  <section class="show-reviews">
        <li v-for="review in reviews" :key="review.id">
          Name - {{review.name}}
          Rate - {{review.rate}}/5
          Date - {{review.readAt}}
          Review - {{review.txt}}
        </li>
  </section>
  `
}