export default {
  props: ['info'],
  template: `
  <section class="note-img ">
    <div class="flex column">
      <img :src="info.url">
      <h4 class="note-title flex align-center"> <i class="fa fa-image note-type"></i> {{info.title}}</h4>  
     
    </div>
  </section>
  `,
  data() {
    return {

    }
  }
}