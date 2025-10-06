"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Array to store guest data in memory
    var guests = [
        { name: 'Alice Smith', email: 'alice@example.com', rsvp_status: 'Not Replied' },
        { name: 'Bob Johnson', email: 'bob@example.com', rsvp_status: 'Yes' },
        { name: 'Charlie Brown', email: 'charlie@example.com', rsvp_status: 'No' }
    ];
    var form = document.getElementById('add-guest-form');
    var guestTableBody = document.getElementById('guest-table-body');
    var totalGuestsSpan = document.getElementById('total-guests');
    var attendingCountSpan = document.getElementById('attending-count');
    var notAttendingCountSpan = document.getElementById('not-attending-count');
    var sendInvitesBtn = document.getElementById('send-invites-btn');
    // Function to render the guest list table
    var renderGuestList = function () {
        guestTableBody.innerHTML = '';
        guests.forEach(function (guest, index) {
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(guest.name, "</td>\n                <td>").concat(guest.email, "</td>\n                <td class=\"status-").concat(guest.rsvp_status.toLowerCase().replace(' ', '-'), "\">").concat(guest.rsvp_status, "</td>\n                <td class=\"action-buttons\">\n                    <select class=\"rsvp-select\" data-index=\"").concat(index, "\">\n                        <option value=\"Not Replied\" ").concat(guest.rsvp_status === 'Not Replied' ? 'selected' : '', ">Not Replied</option>\n                        <option value=\"Yes\" ").concat(guest.rsvp_status === 'Yes' ? 'selected' : '', ">Yes</option>\n                        <option value=\"No\" ").concat(guest.rsvp_status === 'No' ? 'selected' : '', ">No</option>\n                        <option value=\"Maybe\" ").concat(guest.rsvp_status === 'Maybe' ? 'selected' : '', ">Maybe</option>\n                    </select>\n                    <button class=\"delete-btn\" data-index=\"").concat(index, "\">Delete</button>\n                </td>\n            ");
            guestTableBody.appendChild(row);
        });
        updateSummary();
    };
    // Function to update the summary counts
    var updateSummary = function () {
        totalGuestsSpan.textContent = guests.length;
        attendingCountSpan.textContent = guests.filter(function (g) { return g.rsvp_status === 'Yes'; }).length;
        notAttendingCountSpan.textContent = guests.filter(function (g) { return g.rsvp_status === 'No'; }).length;
    };
    // Handle adding a new guest
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var nameInput = document.getElementById('name-input');
        var emailInput = document.getElementById('email-input');
        var newGuest = {
            name: nameInput.value,
            email: emailInput.value,
            rsvp_status: 'Not Replied'
        };
        guests.push(newGuest);
        // Clear form inputs
        nameInput.value = '';
        emailInput.value = '';
        renderGuestList();
    });
    // Handle deleting a guest or updating RSVP status
    guestTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            var index = e.target.dataset.index;
            guests.splice(index, 1);
            renderGuestList();
        }
    });
    guestTableBody.addEventListener('change', function (e) {
        if (e.target.classList.contains('rsvp-select')) {
            var index = e.target.dataset.index;
            var newStatus = e.target.value;
            guests[index].rsvp_status = newStatus;
            renderGuestList();
        }
    });
    // Handle the "Send Invitations" button (simulated)
    sendInvitesBtn.addEventListener('click', function () {
        alert('Simulating: Invitations have been sent to all guests with "Not Replied" status.');
    });
    // Initial render
    renderGuestList();
});
