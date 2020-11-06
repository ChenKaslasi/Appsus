export default {
  props: ['info'],
  template: `
  <section class="note-todos">
    <div class="flex column">
      <ul class="todo-list flex column ">
          <label class="flex align-center" v-for="(todo,idx) in info.todos" :key="idx">
          <span v-if="!todo.isOnEdit" :class="{marked :todo.done}" :key="renderKey">{{todo.txt}} </span>
          <input v-else type="text" placeholder="Add task" v-model="editContent" @keydown.enter.prevent="confirmEditTodo(idx)">
          <div>
            <input type="checkbox" @click.stop="markDone(todo)" v-model="todo.done">
              <button @click="editTodo(idx)"><i class="fa fa-edit"></i></button>
              <button @click="removeTodo(idx)"><i class="fa fa-trash"></i></button>
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
      renderKey: 0,
      editContent: '',
    }
  },
  methods: {
    markDone(todo) {
      todo.done > 0 ? (todo.done = null) : (todo.done = true);
    },
    removeTodo(idx) {
      this.todos.splice(idx,1);
    },
    editTodo(idx) {
      this.todos[idx].isOnEdit = !this.todos[idx].isOnEdit
      this.renderKey++
    },
    confirmEditTodo(idx) {
      this.todos[idx].txt = this.editContent
      this.todos[idx].isOnEdit = false;
      this.renderKey++
      this.editContent =''
    }
  },
  computed: {
    editTodoItem(idx) {
      return true
    }
  },
  created() {
    this.info.todos.map(todo => todo.isOnEdit = false);
    this.todos = this.info.todos
  }
}