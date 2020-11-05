export default {
  template: `
  <section class="node-filter flex align-center">
    <form >
    <i class="fas fa-search"></i><label>
      <input type="text" placeholder="Search notes" v-model="filterBy.value" @keydown.enter.prevent="emitFilter"></label>
    <select @change="emitFilter" v-model="filterBy.noteType">
      <option value="all">All</option>
      <option value="noteText">Text</option>
      <option value="noteTodos">Todos</option>
      <option value="noteImg">Images</option>
      <option value="noteVideo">Video</option>
    </select>
    </form>
    <!-- <pre>{{filterBy}}</pre> -->
  </section>
  `,
  data() {
    return {
      filterBy : {value: '', noteType: 'all'}
    }
  },
  methods: {
    emitFilter() {
      this.$emit('doFilter',this.filterBy)
    },
  }
}