/**
 * Created by tarasmotyl on 12/8/16.
 */

"use strict";

function Item(id) {
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

        /*removeButton.addEventListener('click', function (event) {
            let button = event.target;
            button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
        });*/

        removeButton.addEventListener('click', function () {
            console.log(document.body.dispatchEvent(new CustomEvent("item_removed")));
            noteDiv.parentNode.removeChild(noteDiv);
        });

        parent.appendChild(removeButton);
    };

    this.updateId = function () {
        console.log("id: " + id);
        noteDiv.setAttribute("id", String(--id));
    };

    let addSaveButton = function (parent) {
        let saveButton = document.createElement("button");
        saveButton.setAttribute("id", "save");
        saveButton.innerHTML = "Save";

        parent.appendChild(saveButton);
    };

    this.toString = function () {
        console.log("Item id: " + id);
    };

    this.createItem = function () {
        let notesContainer = document.getElementById("notes_container");
        notesContainer.appendChild(addItemDiv());
    }
}
