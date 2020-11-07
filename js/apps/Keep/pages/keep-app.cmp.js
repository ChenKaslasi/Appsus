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
    <div class="flex wrap justify-between">
      <note-filter @doFilter="setFilter" />
      <note-add class="flex justify-center justify-center align-center"/>
    </div>
  <note-list :notes="notesToShow" pinned="true"/> 
  <note-list :notes="notesToShow" pinned="false"/> 
  
  </section>
  `,
  data() {
    return {
      notes: null,
      filterBy: null
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    notesToShow() {
      if(!this.filterBy || this.filterBy.noteType === 'all' && this.filterBy.value === '') return this.notes;
      var {value,noteType} = this.filterBy;
      if(value.length === 0) {
        return this.notes.filter(note => {
          return note.type === noteType
        })
      } else {
        value = value.toLowerCase();
        return this.notes.filter(note => {
          if(this.filterBy.noteType === 'all') {
            return note.info.title.toLowerCase().includes(value)
          } else {
            return note.type === noteType && note.info.title.toLowerCase().includes(value)
          }
        })
      }
    },
  },
  created() {
    noteService.getNotes().then(notes => this.notes = notes);
  }
}