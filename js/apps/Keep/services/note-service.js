
import {utilService} from '../../../services/util-service.js';


const NOTES_KEY = 'notes';
const gNotes = _createNotes();


export const noteService = {
  getNotes,
  addNote,
  addNoteTodo,
  removeNoteTodo,
  toggleTodoToEdit,
  editNoteTodo,
  deleteNote,
  copyNote,
  markNoteDone,
  changeColor,
  changeNoteUrl,
  changeNoteTxt,

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
  _getNoteById(noteId).then(note => {
    note.backgroundColor = color
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function changeNoteUrl(url,noteId) {
  _getNoteById(noteId).then(note => {
    note.info.url = url
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function changeNoteTxt(txt,noteId) {
  _getNoteById(noteId).then(note => {
    note.info.title = txt
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function addNoteTodo(noteId,todo) {
  _getNoteById(noteId).then(note => {
    note.info.todos.unshift(todo);
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function removeNoteTodo(noteId,todoId) {
  _getNoteById(noteId).then(note => {
    const idx = note.info.todos.findIndex( todo => todo.id === todoId)
    note.info.todos.splice(idx, 1);
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function toggleTodoToEdit(noteId,todoId) {
  _getNoteById(noteId).then(note => {
    const todo = note.info.todos.find( todo => todo.id === todoId)
    todo.isOnEdit = !todo.isOnEdit
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function editNoteTodo(noteId,todoId,content) {
  _getNoteById(noteId).then(note => {
    const todo = note.info.todos.find( todo => todo.id === todoId)
    todo.txt = content
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}


function markNoteDone(noteId,todoId) {
  _getNoteById(noteId).then(note => {
    const todo = note.info.todos.find( todo => todo.id === todoId)
    todo.done = !todo.done
    utilService.storeToStorage(NOTES_KEY,gNotes)
  })
}

function _getNoteById(noteId) {
  const note = gNotes.find( note => note.id === noteId)
  return Promise.resolve(note)
}



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
          {id:utilService.makeId(), txt: 'Todo A', done: false,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todo B', done: false,isOnEdit: false },
          {id:utilService.makeId(), txt: 'Todo C', done: false,isOnEdit: false },
          {id:utilService.makeId(), txt: 'Todo D', done: false,isOnEdit: false },
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
          title:`New text note!`
        },
        backgroundColor: '#8775a8',
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
    backgroundColor: '#EEFF1D',
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
          {id:utilService.makeId(), txt: 'Todo A', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todo B', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todo C', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todo D', done: false ,isOnEdit: false},
        ],
      },
    backgroundColor: '#EEFF1D',
    },
    {
      type: 'noteText',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        title: `In Switzerland it is illegal to own just one guinea pig.`
      },
      backgroundColor: '#EEFF1D',
    },
    {
      type: 'noteImg',
      id: utilService.makeId(),
      isPinned: true,
      info: {
        url: 'https://contents.mediadecathlon.com/p1333176/k$8f9a50e16a68289f8e8526af3944197d/-mid-1-.jpg?&f=400x400',
        title: 'My korkinet',
      },  
      backgroundColor: '#65DB2E',
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
          {id:utilService.makeId(), txt: 'Todod A', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todod B', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todod C', done: false ,isOnEdit: false},
          {id:utilService.makeId(), txt: 'Todod D', done: false ,isOnEdit: false},
        ],
      },
    backgroundColor: '#65DB2E',
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
  {
    type: 'noteText',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      title: `Banging your head against a wall for one hour burns 150 calories.`
    },
    backgroundColor: '#EEFF1D',
  },
  {
    type: 'noteVideo',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url: 'https://www.youtube.com/watch?v=PIU80XHVsus&ab_channel=MusicLab',
      title: '🎵 Music '
    },  
    backgroundColor: '#FFFFFF',
  },
  ]
  utilService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
};


