export default {
  props: ['info'],
  template: `
  <section class="note-img">
    <div>
    <h2>this is imgNote ---{{info.title}}</h2>  
    <img :src="info.img">
    </div>
  </section>
  `,
  data() {
    return {

    }
  }
}