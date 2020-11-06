import bookPreview from './book-preview.cmp.js';


export default {
  components: {
    bookPreview,
  },
  props:['books'],
  template: `
  <section class="book-list">
    <h1 class="header">Our Books</h1>
    <ul >
      <li v-for="currBook in books" :key="currBook.id">
        <book-preview :book="currBook"></book-preview>
      </li>
    </ul>
  </section>
  `,
  methods: {
    emitRemove(bookId) {
      this.$emit('remove',bookId)
    },
  },
}