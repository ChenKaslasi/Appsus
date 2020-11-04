import noteImg from '../cmps-types/note-img.cmp.js';
import noteText from '../cmps-types/note-text.cmp.js';
import noteTodos from '../cmps-types/note-todos.cmp.js';
import noteVideo from '../cmps-types/note-video.cmp.js';

export default {
  props: ['note'],
  template: `
  <section class="note-preview flex column justify-center">
    <container :is="note.type" :info="note.info" />

    <div class="note-controls">
      <button title="Send via mail" > 
      <i class="fa fa-envelope"></i>
      </button> 
      <button title="Pin/Unpin" > 
      <i class="fas fa-thumbtack"></i>
      </button> 
      <button title="Set Background Color" > 
          <i class="fa fa-palette"></i>
      </button> 
      <button title="Copy note"> 
          <i class="fa fa-clone"></i>
      </button> 
      <button title="Edit Note"> 
          <i class="fa fa-edit"></i>
      </button> 
      <button title="Delete"> 
          <i class="fa fa-trash"></i>
      </button> 
    </div>
  </section>
  `,
  components: {
    noteImg,
    noteText,
    noteTodos,
    noteVideo,
  }
}