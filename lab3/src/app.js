class Note {
    constructor(title) {
      this.title = title;
       // HINT🤩 this.element = this.createElement(title);
      this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
  
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
      newNote.addEventListener('click', this.remove.bind(newNote));  
      return newNote;
    }
  
    
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow

      let taskList = document.querySelector("#taskList");
      let inputvalue = document.getElementById('taskInput').value;
      this.newNote = document.createTextNode(inputvalue);
      taskList.append(this.newNote);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      let input = ' ' + document.getElementById('taskInput').value;
      
      if(localStorage.getItem('inputs') === null){
        // inputs = [];
        localStorage.setItem('inputs', '[]');
      }

      let inputs = JSON.parse(localStorage.getItem('inputs'));
    
      inputs.push(input);
      localStorage.setItem('inputs', JSON.stringify(inputs));
      console.log(inputs);
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage


      //this.removeChild(this);
    }
  } 
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      // this.txtTodo = ???
      this.txtTodo = document.querySelector("#taskInput");


      // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));


      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
      this.loadNotesFromStorage();

      //console.log(note);
      console.log(note);
      
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      
      console.log("Do to: load notes");
    }

    
    createNote(e) {
      // this function should create a new note by using the Note() class
      console.log(this);

      if(e.key === "Enter"){
          console.log("push enter");
          e.preventDefault();
      }
      // HINT🤩
      // note.add();
      note.add();
    
      // note.saveToStorage();
      note.saveToStorage();

     
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
      if (e.key === "Enter"){
        this.reset();
        e.preventDefault();
      }
    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.getElementById('taskInput').value='';
      // or document.forms[0].reset();
      return false;
    }
  }
  
  let app = new App();
  let note = new Note();

  
  