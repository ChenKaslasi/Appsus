export default {
  props: ['info'],
  template: `
  <section class="note-text">
    <h4>{{info.txt}}</h4>
    <i class="fa fa-font note-type"></i>
  </section>
  `
}