/**
 * Created by tarasmotyl on 12/8/16.
 */

"use strict";

var id = 1;

function addButtonClick() {
    let items = document.getElementsByClassName("item");
    let clone = items[0].cloneNode(true);
    let setId = '' + id;
    id++;
    clone.setAttribute('id', setId);
    document.getElementById("notes_container").appendChild(clone);

}

function editNote() {
    alert("edit");
}

function removeNote(sender) {
    let note = sender.parentElement.parentNode;
    alert(note);
}