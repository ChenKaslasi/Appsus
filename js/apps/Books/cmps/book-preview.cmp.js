export default {
  props: ['book'],
  template: `
  <section class="book-preview flex column justify-center align-center">
    <router-link :to="getLink" excect class="preview-container flex column justify-center align-center">
      <img :src="imgUrl">
      <h4 class="title">{{book.title}}</h4>
      <h5 class="price">Price - {{getPrice}}<span>{{getCurrency}}</span></h5>
      <button class="more-info-btn">More details</button>
    </router-link>
  </section>
  `,
  computed: {
    imgUrl() {
      return this.book.thumbnail
    },
    getLink() {
      return `/books/list/${this.book.id}`
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