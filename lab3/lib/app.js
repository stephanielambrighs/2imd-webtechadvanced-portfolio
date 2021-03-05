"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title; // HINT🤩 this.element = this.createElement(title);

    this.element = this.createElement(this.title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var newNote = document.createElement("li"); // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

      newNote.addEventListener('click', this.remove.bind(newNote));
      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      var taskList = document.querySelector("#taskList").appendChild(this.element);
      taskList.innerHTML = this.title;
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      // let input = document.querySelector("#taskInput").value;
      if (localStorage.getItem('inputsList') === null) {
        localStorage.setItem('inputsList', JSON.stringify([this.title]));
      } // print 1 keer in de array aff en niet meerdere values in de array 


      var inputs = JSON.parse(localStorage.getItem('inputsList'));
      inputs.push(this.title);
      localStorage.setItem('inputsList', JSON.stringify(inputs));
      console.log(inputs);
    }
  }, {
    key: "remove",
    value: function remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      // index gebruiken 
      // pak je tasklist en remove deze ervan
      // splice = 1 of meerdere elementen uit 
      // naam van je array en dan de index mee en hoeveel op die plaats
      // this.removeChild(this);
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!"); // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???

    this.txtTodo = document.querySelector("#taskInput"); // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));

    this.txtTodo.addEventListener("keypress", this.createNote.bind(this)); // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();

    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // localstorage al bestaat if localstorage 
      if (localStorage.getItem('inputsList') === null) {
        var note = new Note(this.inputs);
        note.foreach(function (load) {
          var post = new Note(load);
          post.add();
        }); // arrow and een if 
      } // let parsed = JSON.stringify(note);
      // localStorage.setItem('inputsList', parsed);


      console.log("Do to: load notes");
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      // this function should create a new note by using the Note() class
      console.log(this); // HINT🤩
      // note.add();
      // note.saveToStorage();

      if (e.key === "Enter") {
        var note = new Note(this.txtTodo.value);
        note.add();
        note.saveToStorage();
        this.reset();
        e.preventDefault();
      } // Note.add(Note.prototype, this.taskList);
      // let note = Note(this.taskList);
      // clear the text field with .reset in this class
      // if (e.key === "Enter")

    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = ''; // or document.forms[0].reset();

      return false;
    }
  }]);

  return App;
}();

var app = new App();