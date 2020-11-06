export default {
  props: ['book'],
  template: `
  <section class="book-preview">
    <router-link :to="getLink" excect class="router-to-details">
      <img :src="imgUrl">
      <h2>{{book.title}}</h2>
      <h4>Price - {{getPrice}} <span>{{getCurrency}}</span></h4>
      <button class="more-info-btn">More details</button>
    </router-link>
  </section>
  `,
  computed: {
    imgUrl() {
      return this.book.thumbnail
    },
    getLink() {
      return `/books/${this.book.id}`
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
    }
  }
}