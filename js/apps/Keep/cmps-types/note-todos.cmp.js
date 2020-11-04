export default {
  props: ['info'],
  template: `
  <section class="note-todos">
    <div class="flex column justify-center">
      <ul>
        <li v-for="todo in info.todos">
          <p>{{todo.txt}}</p>
        </li>
      </ul>
      <h4 class="note-title flex align-center"><i class="fa fa-list note-type"></i> {{info.title}}</h4>
    </div>
  </section>
  `
}