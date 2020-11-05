import noteImg from '../cmps-types/note-img.cmp.js';
import noteText from '../cmps-types/note-text.cmp.js';
import noteTodos from '../cmps-types/note-todos.cmp.js';
import noteVideo from '../cmps-types/note-video.cmp.js';
import {noteService} from '../services/note-service.js';

export default {
  props: ['note','pinned'],
  components: {
    noteImg,
    noteText,
    noteTodos,
    noteVideo,
  },
  template: `
  <section class="note-preview flex column justify-center" :style="noteColor" v-if="isNotePinned" >
    <component v-if="!editMode" :is="note.type" :info="note.info" />
    <form class="edit-mode" v-else  >
      <label v-if="urlToedit">Edit source 
        <input type="text" placeholder="Add URL" v-model="editUrlVal" @keyup.enter.prevent="setUrlEdit">
      </label>
      <label v-if="txtToEdit">Edit content 
        <input type="text" placeholder="Enter text" v-model="editTxtVal" @keyup.enter.prevent="setTxtToEdit">
      </label>
    </form>
    <div v-if="colorsPicker"  class="colors-container">
        <span v-for="color in colors" :style="{backgroundColor:color}" @click.stop="setNoteColor(color)"></span>
    </div>

  <!-- <pre>{{note}}</pre> -->

    <div class="note-controls">
      <button title="Send to mail" @click="sendToMail" > 
      <i class="fa fa-envelope"></i>
      </button> 
      <button title="Pin/Unpin" @click="togglePin"> 
      <i class="fas fa-thumbtack"></i>
      </button> 
      <button title="Change color" @click="toggleColor"> 
          <i class="fa fa-palette"></i>
      </button> 
      <button title="Copy" @click="copyNote"> 
          <i class="fa fa-clone"></i>
      </button> 
      <button title="Edit" @click="toggleEditNote"> 
          <i class="fa fa-edit"></i>
      </button> 
      <button title="Delete" @click="deleteNote"> 
          <i class="fa fa-trash"></i>
      </button> 
    </div>
  </section>
  `,
  data() {
    return {
      colors:['#ff0000','#ffa500','#ffff00','#008000','#3873d7','#8775a8','#ee82ee','#ffff'],
      colorsPicker: false,
      editMode: false,
      editUrlVal: '',
      editTxtVal: '',
      txtToEdit: false,
      urlToedit: false
    }
  },
  methods: {
    sendToMail() {
      console.log('sending to mail')
    },
    togglePin() {
      this.note.isPinned = !this.note.isPinned
    },
    toggleColor() {
      this.colorsPicker = !this.colorsPicker
    },
    toggleEditNote() {
      this.editMode = !this.editMode
    },
    copyNote() {
      noteService.copyNote(this.note)
    },
    deleteNote() {
      noteService.deleteNote(this.note.id)
    },
    setNoteColor(color) {
      noteService.changeColor(color,this.note.id);
      this.toggleColor()
    },
    setUrlEdit() {
      noteService.changeNoteUrl(this.editUrlVal,this.note.id)
      this.toggleEditNote()
    },
    setTxtToEdit() {
      noteService.changeNoteTxt(this.editTxtVal,this.note.id)
      this.toggleEditNote()
    }
  },
  computed: {
    isNotePinned() {
     if(this.note.isPinned === true && this.pinned === "true" || this.note.isPinned === false && this.pinned === "false") return true
    },
    noteColor() {
      return { backgroundColor: this.note.backgroundColor };
    },
  },
  created() {
    if(this.note.type === 'noteImg' || this.note.type === 'noteVideo') {
      this.urlToedit = true
    } else {this.txtToEdit = true}
  }
}