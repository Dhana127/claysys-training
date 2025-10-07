"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Load guests from localStorage or use default
    var guests = JSON.parse(localStorage.getItem('guests')) || [
        { name: 'Alice Smith', email: 'alice@example.com', rsvp_status: 'Not Replied' },
        { name: 'Bob Johnson', email: 'bob@example.com', rsvp_status: 'Yes' },
        { name: 'Charlie Brown', email: 'charlie@example.com', rsvp_status: 'No' }
    ];
    var form = document.getElementById('add-guest-form');
    var guestTableBody = document.getElementById('guest-table-body');
    var sendInvitesBtn = document.getElementById('send-invites-btn');
    // Save guests to localStorage
    var saveGuests = function () {
        localStorage.setItem('guests', JSON.stringify(guests));
    };
    // Function to render the guest list table
    var renderGuestList = function () {
        guestTableBody.innerHTML = '';
        guests.forEach(function (guest, index) {
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(guest.name, "</td>\n                <td>").concat(guest.email, "</td>\n                <td class=\"status-").concat(guest.rsvp_status.toLowerCase().replace(' ', '-'), "\">").concat(guest.rsvp_status, "</td>\n                <td class=\"action-buttons\">\n                    <select class=\"rsvp-select\" data-index=\"").concat(index, "\">\n                        <option value=\"Not Replied\" ").concat(guest.rsvp_status === 'Not Replied' ? 'selected' : '', ">Not Replied</option>\n                        <option value=\"Yes\" ").concat(guest.rsvp_status === 'Yes' ? 'selected' : '', ">Yes</option>\n                        <option value=\"No\" ").concat(guest.rsvp_status === 'No' ? 'selected' : '', ">No</option>\n                        <option value=\"Maybe\" ").concat(guest.rsvp_status === 'Maybe' ? 'selected' : '', ">Maybe</option>\n                    </select>\n                    <button class=\"delete-btn\" data-index=\"").concat(index, "\">Delete</button>\n                </td>\n            ");
            guestTableBody.appendChild(row);
        });
        saveGuests();
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
        nameInput.value = '';
        emailInput.value = '';
        renderGuestList();
    });
    // Handle deleting a guest
    guestTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            var index = e.target.dataset.index;
            guests.splice(index, 1);
            renderGuestList();
        }
    });
    // Handle RSVP status change
    guestTableBody.addEventListener('change', function (e) {
        if (e.target.classList.contains('rsvp-select')) {
            var index = e.target.dataset.index;
            var newStatus = e.target.value;
            guests[index].rsvp_status = newStatus;
            renderGuestList();
        }
    });
    // Simulate sending invitations
    sendInvitesBtn.addEventListener('click', function () {
        alert('Simulating: Invitations have been sent to all guests with "Not Replied" status.');
    });
    // Initial render
    renderGuestList();
});
