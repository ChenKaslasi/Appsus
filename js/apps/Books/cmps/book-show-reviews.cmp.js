export default {
  props: ['reviews'],
  template: `
  <section class="show-reviews">
  <div class="reviews">
    <h3 v-if="reviews.length === 0">
        No reviews for this book yet ... Be the first to leave a review ! 
    </h3>
    <li v-else class="flex wrap" v-for="review in reviews" :key="review.id">
      <div class="details flex column justify-center">
        <div class="name flex align-center">
          <i class="fas fa-user"></i>
          <span>{{setName(review.name)}}</span>
        </div>
          <!-- <span class="stars">★★★☆☆</span> -->
          <span class="stars">{{setStars(review.rate)}}</span>
          <span class="date">{{setDateRead(review.readAt)}}</span>
      </div>
    
      <div class="content">
        <p>{{review.txt}}</p>
      </div>
    </li>
  </div>
  </section>
  `,
  methods: {
    setName(name) {
      return (name.length > 0) ? name : 'Anonymous '
    },
    setStars(rate) {
      return '★'.repeat(rate)+'☆'.repeat( 5-rate)
    },
    setDateRead(date) {
      if(date.length > 0) {
        return `Read at ${date.split("-").reverse().join("-")}`
      } else return 'Unknown date'
    }
  }
}