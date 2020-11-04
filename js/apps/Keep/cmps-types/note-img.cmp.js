export default {
  props: ['info'],
  template: `
  <section class="note-img">
    <div>
    <h2>{{info.title}}</h2>  
    <img :src="info.url">
    <i class="fa fa-image note-type"></i>
    </div>
  </section>
  `,
  data() {
    return {

    }
  }
}