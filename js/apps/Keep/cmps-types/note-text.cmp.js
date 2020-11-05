export default {
  props: ['info'],
  template: `
  <section class="note-text">
    <div class="flex column">
      <h4 class="note-title flex align-center"><i class="fa fa-font note-type"></i> {{info.title}}</h4>
      
    </div>
  </section>
  `
}