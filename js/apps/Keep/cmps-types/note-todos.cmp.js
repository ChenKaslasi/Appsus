export default {
  props: ['info'],
  template: `
  <section class="note-todos">
    <div>
      <ul>
        <li v-for="todo in info.todos">
          <p>{{todo.txt}}</p>
        </li>
      </ul>
      <i class="fa fa-list note-type"></i> 
    </div>
  </section>
  `
}