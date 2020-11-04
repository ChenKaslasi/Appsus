
import {utilService} from '../../../services/util-service.js';


const NOTES_KEY = 'notes';
const gNotes = _createNotes();


export const noteService = {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
  copyNote,
  updateNote,
};


function getNotes() {
  return Promise.resolve(gNotes)
};


function getNoteById(noteId) {
  const note = gNotes.find( note => note.id === noteId)
};

function addNote(note) {
  if(note.type === 'noteImg' || note.type === 'noteVideo') {
    note.info.url = note.info.txt 
    note.info.txt = 'New note!'
  }
  gNotes.unshift(note);
  utilService.storeToStorage(NOTES_KEY,gNotes)
};

function deleteNote() {
  let idx = gNotes.findIndex(note => note.id === noteId)
  gNotes.splice(idx, 1);
  utilService.storeToStorage(NOTES_KEY, gNotes)
};

function updateNote() {
  // ----------------------------------------------------------- ToDo
};

function copyNote(note) {
  const noteCopy = JSON.parse(JSON.stringify(note))
  noteCopy.id = utilService.makeId()
  gNotes.push(noteCopy)
  utilService.storeToStorage(NOTES_KEY,gNotes)
};


function _createNotes() {
  const notes = utilService.loadFromStorage(NOTES_KEY)
  if(notes) return notes
  const defaultNotes = [
    {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: false,
      info: {
        url: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif',
        title: 'Delivery 3 - FINAL SATURDAY 2100',
      },  
      backgroundColor: '00d',
    },
    {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://media.giphy.com/media/dTzxp1oRJSuze/giphy.gif',
        title: 'Bike',
      },  
      backgroundColor: '00d',
    },
    {
      type: 'noteVideo',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://www.youtube.com/watch?v=PIU80XHVsus&ab_channel=MusicLab',
        title: 'ABABABA'
      },  
      backgroundColor: '00d',
    },
    {
      type: 'noteTodos',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title: 'Todo 1st list ',
        todos: [
          { txt: 'Todo A', doneAt: true },
          { txt: 'Todo B', doneAt: false },
          { txt: 'Todo C', doneAt: true },
          { txt: 'Todo D', doneAt: true },
        ],
      },
    backgroundColor: '00d',
  },
    {
      type: 'noteTodos',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title: 'Todo 2nd list ',
        todos: [
          { txt: 'Todod A', doneAt: true },
          { txt: 'Todod B', doneAt: true },
          { txt: 'Todod C', doneAt: true },
          { txt: 'Todod D', doneAt: true },
        ],
      },
    backgroundColor: '00d',
  },
    {
      type: 'noteText',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        txt:`ABABABABABA`
      },
      backgroundColor: '00d',
    },
  ]
  utilService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
};

