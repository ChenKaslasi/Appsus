import noteImg from '../cmps-types/note-img.cmp.js';
import noteText from '../cmps-types/note-text.cmp.js';
import noteTodos from '../cmps-types/note-todos.cmp.js';
import noteVideo from '../cmps-types/note-video.cmp.js';

export default {
  props: ['note'],
  template: `
  <section class="note-preview">
    <container :is="note.type" :info="note.info" />
  </section>
  `,
  components: {
    noteImg,
    noteText,
    noteTodos,
    noteVideo,
  }
}