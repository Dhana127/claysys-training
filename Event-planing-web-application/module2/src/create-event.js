
// Define the shape of an event (for reference only, not used in JS)
const createEventForm = document.getElementById('create-event-form');

// Handle submit event
if (createEventForm) {
  
  createEventForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    // Grab input values
    const nameInput = document.getElementById('event-name').value;
    const dateInput = document.getElementById('event-date').value;
    const timeInput = document.getElementById('event-time').value;
    const locationInput = document.getElementById('event-location').value;
    const categorySelect = document.getElementById('event-category').value;
    const descriptionTextarea = document.getElementById('event-description').value;
    const status='planning';
    const eventData = {
      name: nameInput,
      date: dateInput,
      time: timeInput,
      location: locationInput,
      category: categorySelect,
      description: descriptionTextarea,
      status:status
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

document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("event-category");

  // Load categories from localStorage
  const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];

  // Clear existing options and keep the default one
  categorySelect.innerHTML = `
    <option value="" disabled selected>Select a Category</option>
  `;

  // Add each category as an option
  storedCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.toLowerCase().replace(/\s+/g, "-"); // slugify
    option.textContent = category;
    categorySelect.appendChild(option);
  });
});



// localStorage.clear();
