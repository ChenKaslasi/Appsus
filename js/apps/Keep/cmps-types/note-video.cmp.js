export default {
  props: ['info'],
  template: `
  <section class="note-video">
    <div>
      <iframe width="420" height="315" :src="fullUrl"></iframe>
      <!-- <h3>{{info.title}}</h3> -->
    </div>
  </section>
  `,
  data() {
    return {
      fullUrl: `https://www.youtube.com/embed/${this.info.video}`
    }
  }
}