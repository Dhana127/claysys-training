"use strict";
// Define the shape of an event (for reference only, not used in JS)
var createEventForm = document.getElementById('create-event-form');
// Handle submit event
if (createEventForm) {
    createEventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Grab input values
        var nameInput = document.getElementById('event-name').value;
        var dateInput = document.getElementById('event-date').value;
        var timeInput = document.getElementById('event-time').value;
        var locationInput = document.getElementById('event-location').value;
        var categorySelect = document.getElementById('event-category').value;
        var descriptionTextarea = document.getElementById('event-description').value;
        var status = 'planning';
        var eventData = {
            name: nameInput,
            date: dateInput,
            time: timeInput,
            location: locationInput,
            category: categorySelect,
            description: descriptionTextarea,
            status: status
        };
        // Load existing events or create new array
        var events = JSON.parse(localStorage.getItem('events') || '[]');
        events.push(eventData);
        // Save back to localStorage
        localStorage.setItem('events', JSON.stringify(events));
        try {
            // your code
            alert('Event saved successfully!');
        }
        catch (err) {
            console.error('Error saving event:', err);
        }
        // createEventForm.reset();
    });
}
// Cancel button clears form
var cancelBtn = document.querySelector('.cancel-btn');
if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
        if (createEventForm) {
            createEventForm.reset();
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var categorySelect = document.getElementById("event-category");
    // Load categories from localStorage
    var storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    // Clear existing options and keep the default one
    categorySelect.innerHTML = "\n    <option value=\"\" disabled selected>Select a Category</option>\n  ";
    // Add each category as an option
    storedCategories.forEach(function (category) {
        var option = document.createElement("option");
        option.value = category.toLowerCase().replace(/\s+/g, "-"); // slugify
        option.textContent = category;
        categorySelect.appendChild(option);
    });
});
// localStorage.clear();
