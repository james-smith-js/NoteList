/**
 * Created by tarasmotyl on 12/9/16.
 */

function NoteList() {
    let id = 0;
    let noteArray = [];

    this.addNote = function () {
        let newItem = new Item(id);
        newItem.createItem();
        ++id;

        noteArray.push(newItem);
    };

    this.onRemoveListener = function () {
        console.log("event handler is set");

        window.addEventListener("item_removed", function (event) {
            console.log("in eventlistener function");
        }, false);
    };

    let removeIteFromArray = function (id) {
        noteArray.splice(id, 1);
    };

    let updateIds = function () {
        for (let item in noteArray) {
            console.log(item);
            item.updateId();
        }
    }
}

let noteList = new NoteList();
noteList.onRemoveListener();

function addButtonClick() {
    noteList.addNote();
}