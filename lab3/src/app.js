class Note {
    constructor(title) {
      this.title = title;
       // HINT🤩 this.element = this.createElement(title);
      this.element = this.createElement(this.title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      
      newNote.innerHTML = title;
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
      newNote.addEventListener('click', this.remove.bind(newNote));  
      return newNote;
    }
  
    
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector("#taskList").appendChild(this.element);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify


      
      if(localStorage.getItem('inputsList') === null){
        localStorage.setItem('inputsList', JSON.stringify([this.title]));
      }else {
        // print 1 keer in de array aff en niet meerdere values in de array 
        let inputs = JSON.parse(localStorage.getItem('inputsList'));
        inputs.push(this.title);
        localStorage.setItem('inputsList', JSON.stringify(inputs));
        console.log(inputs);
      }

    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      let taskList = document.querySelector("#taskList");
    
      let indexToDelete = [...taskList.children].indexOf(this);
      let inputs = JSON.parse(localStorage.getItem('inputsList'));
      inputs.splice(indexToDelete, 1);
      localStorage.setItem('inputsList', JSON.stringify(inputs));

      taskList.removeChild(this);
      console.log(indexToDelete);
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
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen

      // localstorage al bestaat if localstorage 
      if(localStorage.getItem('inputsList') != null){
        let noteArray = JSON.parse(localStorage.getItem('inputsList'));

        for(let i = 0; i < noteArray.length; i++){
          let post = new Note(noteArray[i]);
          post.add();
          console.log(i);
        }
      }
    }

    
    createNote(e) {
      // this function should create a new note by using the Note() class
      
      console.log(this);
      // HINT🤩
      // note.add();
      // note.saveToStorage();

      if(e.key === "Enter"){
          let note = new Note(this.txtTodo.value);
          note.add();
          note.saveToStorage();

          this.reset();
          e.preventDefault();
      }
      
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value='';
      // or document.forms[0].reset();
      return false;
    }
  }
  
  let app = new App();
  

  
  