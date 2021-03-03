"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title; // HINT🤩 this.element = this.createElement(title);

    this.element = this.createElement(title);
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
      // use append
      // let note = add.bind(this);
      var note = document.querySelector("#taskList");
      var langs = ['TypeScript', 'HTML', 'CSS'];
      note = langs.map(function (lang) {
        var li = document.createElement('li');
        li.textContent = lang;
        return li;
      });
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      var inputs = [];
      var input = {
        message: document.getElementById('taskInput').value
      };
      inputs.push(input);
      localStorage.setItem('inputList', JSON.stringify(inputs));
    }
  }, {
    key: "remove",
    value: function remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      //this.removeChild(this);
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

    this.loadNotesFromStorage(); //console.log(note);

    console.log(note);
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      console.log("Do to: load notes");
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      // this function should create a new note by using the Note() class
      console.log(this);

      if (e.key === "Enter") {
        console.log("push enter");
        e.preventDefault();
      } // HINT🤩
      // note.add();


      note.add(); // note.saveToStorage();

      note.saveToStorage(); // clear the text field with .reset in this class
      // if (e.key === "Enter")

      if (e.key === "Enter") {
        this.reset();
        e.preventDefault();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form / clear the text field
      document.getElementById('taskInput').value = ''; // or document.forms[0].reset();

      return false;
    }
  }]);

  return App;
}();

var app = new App();
var note = new Note();