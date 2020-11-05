import {noteService} from '../services/note-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';


export default {
  name: 'keep-app',
  components: {
    noteFilter,
    noteAdd,
    noteList
  },
  template: `
  <section class="keep-app">
  <note-filter />
  <note-add class="flex justify-center justify-center align-center"/>
  <note-list :notes="notes" pinned="true"/> 
  <note-list :notes="notes" pinned="false"/> 
  </section>
  `,
  data() {
    return {
      notes: null,
    }
  },
  created() {
    noteService.getNotes().then(notes => this.notes = notes);
  }
}