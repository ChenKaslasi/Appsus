import { noteService } from '../services/note-service.js';
import notePreview from './note-preview.cmp.js';

export default {
  props: ['notes'],
  components: {
    notePreview
  },
  template: `
  <section class="node-list">
    <!-- <pre>{{this.notes}}</pre> -->
    <h1>node list</h1>
    <div class="note-container" v-for="note in notes" :key="note.id">
      <note-preview :note="note" />
    </div>
  </section>
  `,
  data() {
    return {

    }
  },
  methods: {
    
  },
}