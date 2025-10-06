
// Define the shape of an event (for reference only, not used in JS)
const createEventForm = document.getElementById('create-event-form');

// Handle submit event
if (createEventForm) {
  
  createEventForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    // Grab input values
    const nameInput = document.getElementById('event-name').value;
    const datetimeInput = document.getElementById('event-datetime').value;
    const locationInput = document.getElementById('event-location').value;
    const categorySelect = document.getElementById('event-category').value;
    const descriptionTextarea = document.getElementById('event-description').value;

    const eventData = {
      name: nameInput,
      datetime: datetimeInput,
      location: locationInput,
      category: categorySelect,
      description: descriptionTextarea
    };

    // Load existing events or create new array
    let events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(eventData);

    // Save back to localStorage
    localStorage.setItem('events', JSON.stringify(events));

    try {
      // your code
     alert('Event saved successfully!');
    } catch (err) {
      console.error('Error saving event:', err);
    }
    

    // createEventForm.reset();
  });
}

// Cancel button clears form
const cancelBtn = document.querySelector('.cancel-btn');

if (cancelBtn) {
  cancelBtn.addEventListener('click', function () {
    if (createEventForm) {
      createEventForm.reset();
    }
  });
}
// localStorage.clear();
