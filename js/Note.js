/**
 * Created by james-smith-js on 12/8/16.
 */

"use strict";

let id = 0;

function Note(id) {
    let noteDiv;

    let addItemDiv = function () {
        noteDiv = document.createElement("div");
        noteDiv.setAttribute("class", "item");
        noteDiv.setAttribute("id", String(id));

        addInputDiv(noteDiv);
        addButtonsDiv(noteDiv);

        return noteDiv;
    };

    let addInputDiv = function (parent) {
        let inputDiv = document.createElement("div");
        inputDiv.setAttribute("class", "input-div");

        parent.appendChild(inputDiv);

        addInputFiled(inputDiv);
    };

    let addButtonsDiv = function (parent) {
        let buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("class", "buttons-div");

        parent.appendChild(buttonsDiv);

        addSaveButton(buttonsDiv);
        addRemoveButton(buttonsDiv);
    };

    let addInputFiled = function (parent) {
        let inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute("class", "col-centered form-control input_filed");

        parent.appendChild(inputField);
    };

    let addRemoveButton = function (parent) {
        let removeButton = document.createElement("button");
        removeButton.setAttribute("id", "remove");
        removeButton.innerHTML = "Remove";

        removeButton.addEventListener('click', function () {
            noteDiv.parentNode.removeChild(noteDiv);
            setRemoveItemEventListener();
            sendRemoveItemEvent();

            document.body.dispatchEvent(new CustomEvent("testEvent"));
        });

        parent.appendChild(removeButton);
    };

    let addSaveButton = function (parent) {
        let saveButton = document.createElement("button");
        saveButton.setAttribute("id", "save");
        saveButton.innerHTML = "Save";

        parent.appendChild(saveButton);
    };

    let setRemoveItemEventListener = function () {
        document.body.addEventListener("item_removed", function(e) {
            console.log("catch item_removed event");
            noteDiv.setAttribute("id", String(--id));
        }, false);
    };

    let sendRemoveItemEvent = function () {
        let evemt = new CustomEvent("item_removed");
        document.body.dispatchEvent(evemt);
    };

    this.toString = function () {
        console.log("Note id: " + id);
    };

    this.createItem = function () {
        let notesContainer = document.getElementById("notes_container");
        notesContainer.appendChild(addItemDiv());
    };
}

function addButtonClick() {
    let newItem = new Note(id++);
    newItem.createItem();
}
