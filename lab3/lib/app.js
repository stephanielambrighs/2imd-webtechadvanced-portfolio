"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var newNote = document.createElement("li");
      newNote.innerHTML = title; // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

      newNote.addEventListener('click', this.remove.bind(newNote));
      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector("#taskList").appendChild(this.element);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      if (localStorage.getItem('inputsList') === null) {
        localStorage.setItem('inputsList', JSON.stringify([this.title]));
      } else {
        // print 1 keer in de array aff en niet meerdere values in de array 
        var inputs = JSON.parse(localStorage.getItem('inputsList'));
        inputs.push(this.title);
        localStorage.setItem('inputsList', JSON.stringify(inputs));
        console.log(inputs);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      var taskList = document.querySelector("#taskList");

      var indexToDelete = _toConsumableArray(taskList.children).indexOf(this);

      var inputs = JSON.parse(localStorage.getItem('inputsList'));
      inputs.splice(indexToDelete, 1);
      localStorage.setItem('inputsList', JSON.stringify(inputs));
      taskList.removeChild(this);
      console.log(indexToDelete);
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
      if (localStorage.getItem('inputsList') != null) {
        var noteArray = JSON.parse(localStorage.getItem('inputsList'));

        for (var i = 0; i < noteArray.length; i++) {
          var post = new Note(noteArray[i]);
          post.add();
          console.log(i);
        }
      }
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
      } // clear the text field with .reset in this class
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