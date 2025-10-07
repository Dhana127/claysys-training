document.addEventListener('DOMContentLoaded', () => {
  const eventGrid = document.querySelector('.event-grid');
  const searchInput = document.querySelector('.search-filter-bar input');
  const filterDate = document.querySelectorAll('.search-filter-bar select')[0];
  const filterCategory = document.querySelectorAll('.search-filter-bar select')[1];

  let events = JSON.parse(localStorage.getItem('events')) || [];

  const saveEvents = () => {
    localStorage.setItem('events', JSON.stringify(events));
  };

  const renderEvents = (filteredEvents = events) => {
    eventGrid.innerHTML = '';
    filteredEvents.forEach((event, index) => {
      const card = document.createElement('div');
      card.className = 'event-card';

      const status = event.status || 'Unknown';
const date = event.date || 'TBD';
const time = event.time || 'TBD';

      const statusClass = `status-${status.toLowerCase()}`;

      card.innerHTML = `
        <span class="status-badge ${statusClass}">${event.status}</span>
        <h3 style="margin-top: 10px">${event.name}</h3>
        <p>Date & Time: ${event.date} at ${event.time}</p>
        <p style="font-size: 0.9em; color: #555">${event.description}</p>
        <div style="margin-top: 15px; display: flex; gap: 10px">
          <button onclick="alert('Viewing details for ${event.name}')">View Details</button>
          <button onclick="alert('Managing guests for ${event.name}')">Manage Guests</button>
          <select data-index="${index}" class="status-select">
            <option value="Planning" ${event.status === 'Planning' ? 'selected' : ''}>Planning</option>
            <option value="Finalized" ${event.status === 'Finalized' ? 'selected' : ''}>Finalized</option>
            <option value="Canceled" ${event.status === 'Canceled' ? 'selected' : ''}>Canceled</option>
          </select>
        </div>
      `;
      eventGrid.appendChild(card);
    });
  };

  if (searchInput) {
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(keyword) ||
      event.description.toLowerCase().includes(keyword)
    );
    renderEvents(filtered);
  });
}

if (filterDate) {
  filterDate.addEventListener('change', () => {
    alert('Date filter selected (functionality to be implemented)');
  });
}

if (filterCategory) {
  filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    const filtered = events.filter(event => event.category === category);
    renderEvents(filtered);
  });
}


  filterDate.addEventListener('change', () => {
    alert('Date filter selected (functionality to be implemented)');
  });

  filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    const filtered = events.filter(event => event.category === category);
    renderEvents(filtered);
  });

  eventGrid.addEventListener('change', (e) => {
    if (e.target.classList.contains('status-select')) {
      const index = e.target.dataset.index;
      events[index].status = e.target.value;
      saveEvents();
      renderEvents();
    }
  });

  renderEvents();
});
