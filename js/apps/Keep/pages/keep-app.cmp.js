import {noteService} from '../services/note-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';


export default {
  name: 'keep-app',
  components: {
    
  },
  template: `
  <section class="keep-app">
  <note-filter />
  <note-add />
  <!-- pinned list -->
  <note-list/> 
  <!-- unPinned list -->
  <note-list/>
  </section>
  `
}