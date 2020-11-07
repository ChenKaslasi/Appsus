import {noteService} from '../services/note-service.js'

export default {
  props: ['info','noteId'],
  template: `
  <section class="note-todos">
    <div class="flex column">
      <ul class="todo-list flex column ">
        <div class="add-todo flex ">
          <button v-if="!isOnAddTodo" @click="setAddTodo" class="add-todo flex"><i class="fa fa-plus"></i>Add todo</button>
          <input type="text" v-else placeholder="Insert task" v-model="newTodo" @keydown.enter.prevent="addTodo">
        </div>
          <label class="flex align-center" v-for="(todo,idx) in info.todos" :key="idx">
          <span v-if="!todo.isOnEdit" :class="{marked :todo.done}" >{{todo.txt}} </span>
          <input v-else type="text" placeholder="Add task" v-model="editContent" @keydown.enter.prevent="confirmEditTodo(todo.id,idx)">
          <div>
            <input type="checkbox" @click.stop="markDone(todo.id)" v-model="todo.done">
              <button @click="editTodo(idx)"><i class="fa fa-edit"></i></button>
              <button @click="removeTodo(todo.id)"><i class="fa fa-trash"></i></button>
          </div>
          </label>
          <button></button>
      </ul>
      <h4 class="note-title flex align-center"><i class="fa fa-list note-type"></i> {{info.title}}</h4>
    </div>
  </section>
  `,
  data() {
    return {
      todos: null,
      editContent: '',
      isOnAddTodo: false,
      newTodo: '',
    }
  },
  methods: {
    markDone(todoId) {
      noteService.markNoteDone(this.noteId,todoId)
    },
    setAddTodo() {
      this.isOnAddTodo = !this.isOnAddTodo
    },
    addTodo() {
      let todoItem = {txt:this.newTodo,done:false,isOnEdit:false}
      noteService.addNoteTodo(this.noteId,todoItem)
      this.newTodo = '';
      this.isOnAddTodo = false
    },
    removeTodo(todoId) {
      noteService.removeNoteTodo(this.noteId,todoId)
    },
    editTodo(idx) {
      this.todos[idx].isOnEdit = !this.todos[idx].isOnEdit
    },
    confirmEditTodo(todoId,idx) {
      noteService.editNoteTodo(this.noteId,todoId,this.editContent)
      this.todos[idx].isOnEdit = false;
      // this.renderKey++
      this.editContent =''
    }
  },
  created() {
    this.info.todos.map(todo => todo.isOnEdit = false);
    this.todos = this.info.todos
  }
}