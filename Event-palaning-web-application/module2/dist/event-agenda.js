"use strict";
var form = document.getElementById('agendaForm');
var agendaBody = document.getElementById('agendaBody');
// Load saved items from localStorage on page load
var agendaItems = JSON.parse(localStorage.getItem('agendaItems')) || [];
renderAgenda();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var start = document.getElementById('startTime').value;
    var end = document.getElementById('endTime').value;
    var desc = document.getElementById('description').value;
    // Add new item
    agendaItems.push({ start: start, end: end, desc: desc });
    localStorage.setItem('agendaItems', JSON.stringify(agendaItems));
    form.reset();
    renderAgenda();
});
function renderAgenda() {
    agendaBody.innerHTML = '';
    agendaItems.forEach(function (item, index) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td><input type=\"time\" value=\"".concat(item.start, "\" class=\"start-input\" data-index=\"").concat(index, "\"></td>\n      <td><input type=\"time\" value=\"").concat(item.end, "\" class=\"end-input\" data-index=\"").concat(index, "\"></td>\n      <td><input type=\"text\" value=\"").concat(item.desc, "\" class=\"desc-input\" data-index=\"").concat(index, "\"></td>\n      <td class=\"actions\">\n        <button class=\"edit-btn\" onclick=\"editItem(").concat(index, ")\">Save</button>\n        <button class=\"delete-btn\" onclick=\"deleteItem(").concat(index, ")\">Delete</button>\n      </td>\n    ");
        agendaBody.appendChild(row);
    });
}
function editItem(index) {
    var startInput = document.querySelector(".start-input[data-index=\"".concat(index, "\"]")).value;
    var endInput = document.querySelector(".end-input[data-index=\"".concat(index, "\"]")).value;
    var descInput = document.querySelector(".desc-input[data-index=\"".concat(index, "\"]")).value;
    agendaItems[index] = { start: startInput, end: endInput, desc: descInput };
    localStorage.setItem('agendaItems', JSON.stringify(agendaItems));
    renderAgenda();
}
function deleteItem(index) {
    agendaItems.splice(index, 1);
    localStorage.setItem('agendaItems', JSON.stringify(agendaItems));
    renderAgenda();
}
// Save event to localStorage
var cform = document.getElementById('createEventForm');
if (cform) {
    cform.addEventListener('submit', function (e) {
        e.preventDefault();
        var eventData = {
            name: document.getElementById('event-name').value,
            datetime: document.getElementById('event-datetime').value,
            location: document.getElementById('event-location').value,
            category: document.getElementById('event-category').value,
            description: document.getElementById('event-description').value
        };
        var events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(eventData);
        localStorage.setItem('events', JSON.stringify(events));
        alert('Event saved successfully!');
        cform.reset();
    });
}
// Cancel button clears form
document.querySelector('.cancel-btn').addEventListener('click', function () {
    cformform.reset();
});
