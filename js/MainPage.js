/**
 * Created by james-smith-js on 12/9/16.
 */

function NoteList() {
    let noteArray = [];

    this.addNote = function () {
        let newItem = new Note(noteArray.length);
        newItem.createItem();

        noteArray.push(newItem);
    };

    this.listener = function () {
        document.addEventListener("testEvent", function (e) {
            console.log("testEvent here");
        })
    }
}

let noteList = new NoteList();
noteList.listener();

