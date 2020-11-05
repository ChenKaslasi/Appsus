import {noteService} from '../services/note-service.js';

export default {
  template: `
  <section class="node-add flex ">
    <div class="add-container flex justify-center align-center">
      <input type="text" placeholder="Enter text" v-model="content" @keydown.enter.prevent="getNewNote">
      <div >
        <i class="fa fa-image" ></i>
        <i class="fa fa-font" ></i>
        <i class="fa fa-list" ></i>
        <i class="fa fa-youtube" ></i>
      </div>
    </div>
  </section>
  `,
  data() {
    return {
      content: '',
      noteType: 'noteText',
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
    }
  }
}

