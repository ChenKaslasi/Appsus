
import {utilService} from '../../../services/util-service.js';


const NOTES_KEY = 'notes';
const gNotes = _createNotes();


export const noteService = {
  getNotes,
  addNote,
  deleteNote,
  copyNote,
  changeColor,
  changeNoteUrl,
  changeNoteTxt
};


function getNotes() {
  return Promise.resolve(gNotes)
};



function addNote(noteType,content) {
  let note = _getEmptyNote(noteType);
  if(noteType === 'noteImg' || noteType === 'noteVideo') {
    note.info.url = content
  } else if (noteType === 'noteTodos') {
    note.info.title = content
  } else {
    note.info.title = content
  }
  gNotes.unshift(note);
  utilService.storeToStorage(NOTES_KEY,gNotes)
};

function deleteNote(noteId) {
  let idx = gNotes.findIndex(note => note.id === noteId)
  gNotes.splice(idx, 1);
  utilService.storeToStorage(NOTES_KEY, gNotes)
};

function copyNote(note) {
  const noteCopy = JSON.parse(JSON.stringify(note))
  noteCopy.id = utilService.makeId()
  gNotes.push(noteCopy)
  utilService.storeToStorage(NOTES_KEY,gNotes)
};

function changeColor(color,noteId) {
  _getNoteById(noteId).then(note => note.backgroundColor = color)
}

function changeNoteUrl(url,noteId) {
  _getNoteById(noteId).then(note => note.info.url = url)
}

function changeNoteTxt(txt,noteId) {
  _getNoteById(noteId).then(note => note.info.title = txt)
}

function _getNoteById(noteId) {
  const note = gNotes.find( note => note.id === noteId)
  return Promise.resolve(note)
};


function _getEmptyNote(noteType) {
  switch(noteType) {
    case 'noteImg' :
    return {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://media.giphy.com/media/QhjR3MG9ZFfjB6BtIZ/giphy.gif',
        title: 'new image!',
      },  
      backgroundColor: '#EEFF1D',
    }
    case 'noteTodos' :
    return {
      type: 'noteTodos',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title: 'new Todo list ',
        todos: [
          { txt: 'Todo A', done: true },
          { txt: 'Todo B', done: false },
          { txt: 'Todo C', done: true },
          { txt: 'Todo D', done: true },
        ],
      },
    backgroundColor: '#EEFF1D',
    }
    case 'noteText' :
     return {
        type: 'noteText',
        id: utilService.makeId(),
        isPinned: true,
        info: {
          title:`new text note!`
        },
        backgroundColor: '#FFFFFF',
    }
    case 'noteVideo' :
    return {
      type: 'noteVideo',
    id: utilService.makeId(),
    isPinned: true,
    info: {
      url: 'https://www.youtube.com/watch?v=PIU80XHVsus&ab_channel=MusicLab',
      title: 'new video note !'
    },  
    backgroundColor: '#FFFFFF',
    }
  }
}


function _createNotes() {
  const notes = utilService.loadFromStorage(NOTES_KEY)
  if(notes) return notes
  const defaultNotes = [
    {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif',
        title: 'Delivery 1 - WEDNESDAY 2100',
      },  
      backgroundColor: '#EEFF1D',
    },
    {
      type: 'noteTodos',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title: 'Todo 1st list ',
        todos: [
          { txt: 'Todo A', done: true },
          { txt: 'Todo B', done: false },
          { txt: 'Todo C', done: true },
          { txt: 'Todo D', done: false },
        ],
      },
    backgroundColor: '#EEFF1D',
    },
    {
      type: 'noteText',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title:`ABABABABABA`
      },
      backgroundColor: '#FFFFFF',
    },
    {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
        title: 'Delivery 2 - THURSDAY 2100',
      },  
      backgroundColor: '#65DB2E',
    },
    {
      type: 'noteTodos',
      id: utilService.makeId(),
      isPinned: false,
      info: {
        title: 'Todo 2nd list ',
        todos: [
          { txt: 'Todod A', done: false },
          { txt: 'Todod B', done: true },
          { txt: 'Todod C', done: true },
          { txt: 'Todod D', done: false },
        ],
      },
    backgroundColor: '#65DB2E',
  },
  {
    type: 'noteVideo',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url: 'https://www.youtube.com/watch?v=PIU80XHVsus&ab_channel=MusicLab',
      title: 'ABABABA'
    },  
    backgroundColor: '#FFFFFF',
  },
  {
    type: 'noteImg',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url: 'https://media.giphy.com/media/Oj5w7lOaR5ieNpuBhn/giphy.gif',
      title: 'Delivery 3 - FINAL SATURDAY 2100',
    },  
    backgroundColor: '#65DB2E',
  },
  ]
  utilService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
};


