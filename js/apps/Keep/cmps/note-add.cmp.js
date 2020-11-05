import {noteService} from '../services/note-service.js';

export default {
  template: `
  <section class="node-add flex ">
    <div class="add-container flex justify-center align-center">
      <input type="text" :placeholder="notePlaceholder" v-model="content" @keydown.enter.prevent="getNewNote">
      <div >
      <!-- :CLASS="{COLOR: NOTETYPE ==== 'NOTETEXT'}" -->
        <i class="fa fa-font"  @click="setTextType" ></i>
        <i class="fa fa-list" @click="setListType" ></i>
        <i class="fa fa-image" @click="setImageType"></i>
        <i class="fa fa-youtube" @click="setVideoType" ></i>
      </div>
    </div>
  </section>
  `,
  data() {
    return {
      content: '',
      noteType: 'noteText',
      notePlaceholder: 'Add somthing Todo'
    }
  },
  computed: {
   
  },
  methods: {
    getNewNote() {
      noteService.addNote(this.noteType,this.content);
      console.log(this.noteType);
      console.log(this.content);
      this.content = '';
    },
    setTextType() {
      this.noteType = 'noteText'
      this.notePlaceholder = 'Add somthing Todo'
    },
    setListType() {
      this.noteType = 'noteTodos'
      this.notePlaceholder = 'Add list title'
    },
    setImageType() {
      this.noteType = 'noteImg'
      this.notePlaceholder = 'Add image link'
    },
    setVideoType() {
      this.noteType = 'noteVideo'
      this.notePlaceholder = 'Add YouTube link'
    },
  }
}

