document.addEventListener("DOMContentLoaded", () => {
  const eventGrid = document.querySelector(".event-grid");
  const searchInput = document.querySelector(".search-filter-bar input");
  const filterDate = document.getElementById("searchdate");
  const filterCategory = document.querySelectorAll(".search-filter-bar select");

  let events = JSON.parse(localStorage.getItem("events")) || [];
  let guests = JSON.parse(localStorage.getItem("guests")) || [];
  let agendaItems = JSON.parse(localStorage.getItem("agendaItems")) || [];

  const saveEvents = () => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  const renderEvents = (filteredEvents = events) => {
    eventGrid.innerHTML = "";
    filteredEvents.forEach((event, index) => {
      const card = document.createElement("div");
      card.className = "event-card";

      const status = event.status || "Unknown";
      const date = event.date || "TBD";
      const time = event.time || "TBD";

      const statusClass = `status-${status.toLowerCase()}`;

      card.innerHTML = `
        <span class="status-badge ${statusClass}">${event.status}</span>
        <h3 style="margin-top: 10px">${event.name}</h3>
        <p>Date & Time: ${event.date} at ${event.time}</p>
        <p style="font-size: 0.9em; color: #555">${event.description}</p>
        <div style="margin-top: 15px; display: flex; gap: 10px">
          <button class="view-details-btn" data-index="${index}">View Details</button>
          <a href="./manage-guest.html">
          <button>Manage Guests</button>
          </a>
          <select data-index="${index}" class="status-select">
            <option value="Planning" ${
              event.status === "Planning" ? "selected" : ""
            }>Planning</option>
            <option value="Finalized" ${
              event.status === "Finalized" ? "selected" : ""
            }>Finalized</option>
            <option value="Canceled" ${
              event.status === "Canceled" ? "selected" : ""
            }>Canceled</option>
          </select>
        </div>
      `;
      eventGrid.appendChild(card);
    });
  };

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = events.filter(
        (event) =>
          event.name.toLowerCase().includes(keyword) ||
          event.description.toLowerCase().includes(keyword)
      );
      renderEvents(filtered);
    });
  }

  if (filterDate) {
    filterDate.addEventListener("input", () => {
      const date = filterDate.value;
      const filterdate = events.filter((events) => events.date == date);
      renderEvents(filterdate);
    });
  }

  if (filterCategory) {
    filterCategory.forEach((select) => {
      select.addEventListener("change", () => {
        const category = select.value;
        const filtered = events.filter((event) => event.category === category);
        renderEvents(filtered);
      });
    });
  }

  eventGrid.addEventListener("change", (e) => {
    if (e.target.classList.contains("status-select")) {
      const index = e.target.dataset.index;
      events[index].status = e.target.value;
      saveEvents();
      renderEvents();
    }
  });

  eventGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details-btn")) {

      const agendaList =
        agendaItems
          ?.map(
            (item) =>
              `<li>${item.desc}  Start:${item.start} End:${item.end}</li>`
          )
          .join("") || "<li>No agenda items</li>";
      const guestList =
        guests.map((guest) => `<li>${guest.name}</li>`).join("") ||
        "<li>No guests</li>";

      const detailsHTML = `
      <div class="event-details">
        <h4>Agenda Items</h4>
        <ul>${agendaList}</ul>
        <h4>Guest List</h4>
        <ul>${guestList}</ul>
      </div>
    `;

      const card = e.target.closest(".event-card");
      card.insertAdjacentHTML("beforeend", detailsHTML);
    }
  });

  renderEvents();
});
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.querySelector(".search-filter-bar select");

  // Load categories from localStorage
  const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];

  // Clear existing options except the first one
  categorySelect.innerHTML = `
    <option value="" disabled selected>Select a Category</option>
  `;

  // Add categories from localStorage
  storedCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.toLowerCase().replace(/\s+/g, "-"); // slugify
    option.textContent = category;
    categorySelect.appendChild(option);
  });
});
