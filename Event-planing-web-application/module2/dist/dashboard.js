"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var eventGrid = document.querySelector(".event-grid");
    var searchInput = document.querySelector(".search-filter-bar input");
    var filterDate = document.getElementById("searchdate");
    var filterCategory = document.querySelectorAll(".search-filter-bar select");
    var events = JSON.parse(localStorage.getItem("events")) || [];
    var guests = JSON.parse(localStorage.getItem("guests")) || [];
    var agendaItems = JSON.parse(localStorage.getItem("agendaItems")) || [];
    var saveEvents = function () {
        localStorage.setItem("events", JSON.stringify(events));
    };
    var renderEvents = function (filteredEvents) {
        if (filteredEvents === void 0) { filteredEvents = events; }
        eventGrid.innerHTML = "";
        filteredEvents.forEach(function (event, index) {
            var card = document.createElement("div");
            card.className = "event-card";
            var status = event.status || "Unknown";
            var date = event.date || "TBD";
            var time = event.time || "TBD";
            var statusClass = "status-".concat(status.toLowerCase());
            card.innerHTML = "\n        <span class=\"status-badge ".concat(statusClass, "\">").concat(event.status, "</span>\n        <h3 style=\"margin-top: 10px\">").concat(event.name, "</h3>\n        <p>Date & Time: ").concat(event.date, " at ").concat(event.time, "</p>\n        <p style=\"font-size: 0.9em; color: #555\">").concat(event.description, "</p>\n        <div style=\"margin-top: 15px; display: flex; gap: 10px\">\n          <button class=\"view-details-btn\" data-index=\"").concat(index, "\">View Details</button>\n          <a href=\"./manage-guest.html\">\n          <button>Manage Guests</button>\n          </a>\n          <select data-index=\"").concat(index, "\" class=\"status-select\">\n            <option value=\"Planning\" ").concat(event.status === "Planning" ? "selected" : "", ">Planning</option>\n            <option value=\"Finalized\" ").concat(event.status === "Finalized" ? "selected" : "", ">Finalized</option>\n            <option value=\"Canceled\" ").concat(event.status === "Canceled" ? "selected" : "", ">Canceled</option>\n          </select>\n        </div>\n      ");
            eventGrid.appendChild(card);
        });
    };
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            var keyword = searchInput.value.toLowerCase();
            var filtered = events.filter(function (event) {
                return event.name.toLowerCase().includes(keyword) ||
                    event.description.toLowerCase().includes(keyword);
            });
            renderEvents(filtered);
        });
    }
    if (filterDate) {
        filterDate.addEventListener("input", function () {
            var date = filterDate.value;
            var filterdate = events.filter(function (events) { return events.date == date; });
            renderEvents(filterdate);
        });
    }
    if (filterCategory) {
        filterCategory.forEach(function (select) {
            select.addEventListener("change", function () {
                var category = select.value;
                var filtered = events.filter(function (event) { return event.category === category; });
                renderEvents(filtered);
            });
        });
    }
    eventGrid.addEventListener("change", function (e) {
        if (e.target.classList.contains("status-select")) {
            var index = e.target.dataset.index;
            events[index].status = e.target.value;
            saveEvents();
            renderEvents();
        }
    });
    eventGrid.addEventListener("click", function (e) {
        if (e.target.classList.contains("view-details-btn")) {
            var agendaList = (agendaItems === null || agendaItems === void 0 ? void 0 : agendaItems.map(function (item) {
                return "<li>".concat(item.desc, "  Start:").concat(item.start, " End:").concat(item.end, "</li>");
            }).join("")) || "<li>No agenda items</li>";
            var guestList = guests.map(function (guest) { return "<li>".concat(guest.name, "</li>"); }).join("") ||
                "<li>No guests</li>";
            var detailsHTML = "\n      <div class=\"event-details\">\n        <h4>Agenda Items</h4>\n        <ul>".concat(agendaList, "</ul>\n        <h4>Guest List</h4>\n        <ul>").concat(guestList, "</ul>\n      </div>\n    ");
            var card = e.target.closest(".event-card");
            card.insertAdjacentHTML("beforeend", detailsHTML);
        }
    });
    renderEvents();
});
document.addEventListener("DOMContentLoaded", function () {
    var categorySelect = document.querySelector(".search-filter-bar select");
    // Load categories from localStorage
    var storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    // Clear existing options except the first one
    categorySelect.innerHTML = "\n    <option value=\"\" disabled selected>Select a Category</option>\n  ";
    // Add categories from localStorage
    storedCategories.forEach(function (category) {
        var option = document.createElement("option");
        option.value = category.toLowerCase().replace(/\s+/g, "-"); // slugify
        option.textContent = category;
        categorySelect.appendChild(option);
    });
});
