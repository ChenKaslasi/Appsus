export default {
  template: `
  <section class="book-filter">
      <div class="search">
        Search:
        <input type="text" v-model="filterBy.byName" placeholder="Search book" @input="emitFilter" @change="emitFilter">
      </div>

      <div class="price-range">
        <div class="min">
          Min price:
          <input type="number" min="0" max="200" v-model.number="filterBy.fromPrice" @change="emitFilter">
        </div>

        <div class="max">
           Max price:
           <input type="number" min="0" max="200" v-model.number="filterBy.toPrice">
        </div>
      </div>
      <button @click="clearFilters">Clear all</button>
  </section>
  `,
  data() {
    return {
      filterBy : {byName: '', fromPrice: 0 , toPrice:Infinity}
    }
  },
  methods: {
    emitFilter() {
      this.$emit('doFilter',this.filterBy)
    },
    clearFilters() {
      this.filterBy = {byName: '', fromPrice: 0 , toPrice:Infinity}
      this.emitFilter()
    }
  }
}