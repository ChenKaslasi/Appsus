import {noteService} from '../services/note-service.js';

export default {
  template: `
  <section class="node-add flex ">
    <div class="add-container flex justify-center align-center">
      <input type="text" :placeholder="activeNote.txt" v-model="content" @keydown.enter.prevent="getNewNote">
      <div >
        <i v-for="type in noteTypes" :key="type.id" :class="[type.cls,{active: type.isActive}]"
            @click="setActiveNote(type.id)"></i>
      </div>
    </div>
  </section>
  `,
  data() {
    return {
      content: '',
      noteTypes: null,
      activeNote: null,
    }
  },
  computed: {
   
  },
  methods: {
    getNewNote() {
      noteService.addNote(this.activeNote.noteType,this.content);
      this.content = '';
    },
    setActiveNote(key) {
      this.clearActive()
      this.activeNote = this.noteTypes.filter(note => note.id === +key)[0];
      this.activeNote.isActive = true
    },
    clearActive() {
      for (let i = 0; i < this.noteTypes.length; i++) {
        this.noteTypes[i].isActive = false
      }
    }
  },
  created() {
    this.noteTypes = 
    [
      {id: 0, cls:'fa fa-font', noteType: 'noteText' ,txt: 'Add somthing Todo', isActive: true},
      {id: 1, cls:'fa fa-list',noteType: 'noteTodos' ,txt: 'Add list title', isActive: false},
      {id: 2, cls:'fa fa-image',noteType: 'noteImg' ,txt: 'Add image link', isActive: false},
      {id: 3, cls:'fa fa-youtube',noteType: 'noteVideo' ,txt: 'Add YouTube link', isActive: false},
    ]
    this.activeNote = this.noteTypes[0];
  }
}

