import { noteService } from '../services/note-service.js';
import notePreview from './note-preview.cmp.js';

export default {
  props: ['notes','pinnedType'],
  components: {
    notePreview
  },
  template: `
  <section class="note-list">
    <!-- <pre>{{this.notes}}</pre> -->
    <h1>{{pinnedType}}</h1>
    <div class="notes flex">
      <div class="note-container flex justify-center" v-for="note in notes" :key="note.id">
        <note-preview :note="note" />
      </div>
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