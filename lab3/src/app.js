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
      // use append
      // let note = add.bind(this);
      let note = document.querySelector("#taskList");
      let langs =['TypeScript', 'HTML', 'CSS'];

      note = langs.map(lang => {
        let li = document.createElement('li');
        li.textContent = lang;
        return li;
      });
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      this.removeChild(this);
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
      // console.log(note);
      
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
          //location.reload();
      }
      // HINT🤩
      // note.add();
      
      // note.add();
      
      // note.add(this);
      // let note = add.bind(note);
      // note();

      // note.saveToStorage();
      // note.saveToStorage();

     
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
      if (e.key === "Enter"){
        this.reset();
      }
    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.getElementById('taskInput').value='';
      return false;
    }
  }
  
  let app = new App();

  
  