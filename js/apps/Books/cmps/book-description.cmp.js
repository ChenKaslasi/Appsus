export default {
  props: ['description'],
  template: `
  <section class="book-description">
    <p v-if="isPartialText">{{partialText}}</p>
    <p v-else>{{description}}</p>
    <button class="more-btn" v-if="this.isPartialText" @click="toggleFullText">Read more</button>
    <button class="less-btn" v-if="!this.isPartialText" @click="toggleFullText">Read less</button>
  </section>
  `,
  data() {
    return {
      isPartialText: true
    }
  },
  methods: {
    toggleFullText() {
      this.isPartialText = !this.isPartialText
    }
  },
  computed: {
    partialText() {
      return `${this.description.substring(0, 50)}...`
    }
  }
}