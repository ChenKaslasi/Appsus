export default {
  props: ['info'],
  template: `
  <section class="note-todos">
    <div class="flex column">
      <ul class="todo-list flex column ">
          <label class="flex align-center" v-for="todo in info.todos">
          <span>{{todo.txt}}</span>
          <div>
            <input type="checkbox" @click.stop="markDone(todo)" v-model="todo.done">
              <button><i class="fa fa-trash"></i></button> 
          </div>
          </label>
      </ul>
      <h4 class="note-title flex align-center"><i class="fa fa-list note-type"></i> {{info.title}}</h4>
    </div>
  </section>
  `,
  data() {
    return {
      todos: null,
    }
  },
  methods: {
    markDone(todo) {
      todo.done > 0 ? (todo.done = null) : (todo.done = true);
    },
  }
}