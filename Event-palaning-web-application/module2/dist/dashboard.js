"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var eventGrid = document.querySelector('.event-grid');
    var searchInput = document.querySelector('.search-filter-bar input');
    var filterDate = document.querySelectorAll('.search-filter-bar select')[0];
    var filterCategory = document.querySelectorAll('.search-filter-bar select')[1];
    var events = JSON.parse(localStorage.getItem('events')) || [];
    var saveEvents = function () {
        localStorage.setItem('events', JSON.stringify(events));
    };
    var renderEvents = function (filteredEvents) {
        if (filteredEvents === void 0) { filteredEvents = events; }
        eventGrid.innerHTML = '';
        filteredEvents.forEach(function (event, index) {
            var card = document.createElement('div');
            card.className = 'event-card';
            var status = event.status || 'Unknown';
            var date = event.date || 'TBD';
            var time = event.time || 'TBD';
            var statusClass = "status-".concat(status.toLowerCase());
            card.innerHTML = "\n        <span class=\"status-badge ".concat(statusClass, "\">").concat(event.status, "</span>\n        <h3 style=\"margin-top: 10px\">").concat(event.name, "</h3>\n        <p>Date & Time: ").concat(event.date, " at ").concat(event.time, "</p>\n        <p style=\"font-size: 0.9em; color: #555\">").concat(event.description, "</p>\n        <div style=\"margin-top: 15px; display: flex; gap: 10px\">\n          <button onclick=\"alert('Viewing details for ").concat(event.name, "')\">View Details</button>\n          <button onclick=\"alert('Managing guests for ").concat(event.name, "')\">Manage Guests</button>\n          <select data-index=\"").concat(index, "\" class=\"status-select\">\n            <option value=\"Planning\" ").concat(event.status === 'Planning' ? 'selected' : '', ">Planning</option>\n            <option value=\"Finalized\" ").concat(event.status === 'Finalized' ? 'selected' : '', ">Finalized</option>\n            <option value=\"Canceled\" ").concat(event.status === 'Canceled' ? 'selected' : '', ">Canceled</option>\n          </select>\n        </div>\n      ");
            eventGrid.appendChild(card);
        });
    };
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var keyword = searchInput.value.toLowerCase();
            var filtered = events.filter(function (event) {
                return event.name.toLowerCase().includes(keyword) ||
                    event.description.toLowerCase().includes(keyword);
            });
            renderEvents(filtered);
        });
    }
    if (filterDate) {
        filterDate.addEventListener('change', function () {
            alert('Date filter selected (functionality to be implemented)');
        });
    }
    if (filterCategory) {
        filterCategory.addEventListener('change', function () {
            var category = filterCategory.value;
            var filtered = events.filter(function (event) { return event.category === category; });
            renderEvents(filtered);
        });
    }
    filterDate.addEventListener('change', function () {
        alert('Date filter selected (functionality to be implemented)');
    });
    filterCategory.addEventListener('change', function () {
        var category = filterCategory.value;
        var filtered = events.filter(function (event) { return event.category === category; });
        renderEvents(filtered);
    });
    eventGrid.addEventListener('change', function (e) {
        if (e.target.classList.contains('status-select')) {
            var index = e.target.dataset.index;
            events[index].status = e.target.value;
            saveEvents();
            renderEvents();
        }
    });
    renderEvents();
});
