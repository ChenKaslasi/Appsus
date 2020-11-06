import { noteService } from '../services/note-service.js';
import notePreview from './note-preview.cmp.js';

export default {
  props: ['notes','pinned'],
  components: {
    notePreview
  },
  template: `
  <section class="note-list">
    <header><h1>{{getTitle}}</h1></header> 
    <draggable class="flex wrap justify-center align-center" :options="dragOptions" >
      <div class="note-container flex justify-center" v-for="note in notes" :key="note.id">
        <note-preview :note="note" :pinned="pinned"/>
      </div>
    </draggable>    
  </section>

  `,
  data() {
    return {
      drag:false,
      somelist: [1,2,3]
    }
  },
  methods: {
    
  },
  computed: {
    getTitle() {
      return this.pinned === 'false' ? 'Other Notes' : 'Pinned Notes' ; 
    },
    dragOptions() {
      return {
        animation: 300,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  }
}