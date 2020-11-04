export default {
  props: ['info'],
  template: `
  <section class="note-todos">
    <div>
      <ul>
        <li v-for="todo in info.todos">
          <p>this is todoNote item --- {{todo.txt}}</p>
        </li>
      </ul>
    </div>
  </section>
  `
}