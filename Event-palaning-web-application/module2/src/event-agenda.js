
const form = document.getElementById('agendaForm');
const agendaBody = document.getElementById('agendaBody');

// Load saved items from localStorage on page load
let agendaItems = JSON.parse(localStorage.getItem('agendaItems')) || [];
renderAgenda();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const desc = document.getElementById('description').value;

  // Add new item
  agendaItems.push({ start, end, desc });
  localStorage.setItem('agendaItems', JSON.stringify(agendaItems));

  form.reset();
  renderAgenda();
});

function renderAgenda() {
  agendaBody.innerHTML = '';

  agendaItems.forEach((item, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><input type="time" value="${item.start}" class="start-input" data-index="${index}"></td>
      <td><input type="time" value="${item.end}" class="end-input" data-index="${index}"></td>
      <td><input type="text" value="${item.desc}" class="desc-input" data-index="${index}"></td>
      <td class="actions">
        <button class="edit-btn" onclick="editItem(${index})">Save</button>
        <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
    agendaBody.appendChild(row);
  });
}

function editItem(index) {
  const startInput = document.querySelector(`.start-input[data-index="${index}"]`).value;
  const endInput = document.querySelector(`.end-input[data-index="${index}"]`).value;
  const descInput = document.querySelector(`.desc-input[data-index="${index}"]`).value;

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
const cform = document.getElementById('createEventForm');
if(cform){
cform.addEventListener('submit', (e) => {
  e.preventDefault();

  const eventData = {
    name: document.getElementById('event-name').value,
    datetime: document.getElementById('event-datetime').value,
    location: document.getElementById('event-location').value,
    category: document.getElementById('event-category').value,
    description: document.getElementById('event-description').value
  };

  let events = JSON.parse(localStorage.getItem('events')) || [];
  events.push(eventData);
  localStorage.setItem('events', JSON.stringify(events));

  alert('Event saved successfully!');
  cform.reset();
});
}

// Cancel button clears form
document.querySelector('.cancel-btn').addEventListener('click', () => {
  cformform.reset();
});
