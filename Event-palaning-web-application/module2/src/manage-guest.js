document.addEventListener('DOMContentLoaded', () => {
    // Load guests from localStorage or use default
    let guests = JSON.parse(localStorage.getItem('guests')) || [
        { name: 'Alice Smith', email: 'alice@example.com', rsvp_status: 'Not Replied' },
        { name: 'Bob Johnson', email: 'bob@example.com', rsvp_status: 'Yes' },
        { name: 'Charlie Brown', email: 'charlie@example.com', rsvp_status: 'No' }
    ];

    const form = document.getElementById('add-guest-form');
    const guestTableBody = document.getElementById('guest-table-body');
    const sendInvitesBtn = document.getElementById('send-invites-btn');

    // Save guests to localStorage
    const saveGuests = () => {
        localStorage.setItem('guests', JSON.stringify(guests));
    };

    // Function to render the guest list table
    const renderGuestList = () => {
        guestTableBody.innerHTML = '';
        guests.forEach((guest, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${guest.name}</td>
                <td>${guest.email}</td>
                <td class="status-${guest.rsvp_status.toLowerCase().replace(' ', '-')}">${guest.rsvp_status}</td>
                <td class="action-buttons">
                    <select class="rsvp-select" data-index="${index}">
                        <option value="Not Replied" ${guest.rsvp_status === 'Not Replied' ? 'selected' : ''}>Not Replied</option>
                        <option value="Yes" ${guest.rsvp_status === 'Yes' ? 'selected' : ''}>Yes</option>
                        <option value="No" ${guest.rsvp_status === 'No' ? 'selected' : ''}>No</option>
                        <option value="Maybe" ${guest.rsvp_status === 'Maybe' ? 'selected' : ''}>Maybe</option>
                    </select>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            guestTableBody.appendChild(row);
        });

        saveGuests();
    };


    // Handle adding a new guest
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        
        const newGuest = {
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
    guestTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            guests.splice(index, 1);
            renderGuestList();
        }
    });

    // Handle RSVP status change
    guestTableBody.addEventListener('change', (e) => {
        if (e.target.classList.contains('rsvp-select')) {
            const index = e.target.dataset.index;
            const newStatus = e.target.value;
            guests[index].rsvp_status = newStatus;
            renderGuestList();
        }
    });

    // Simulate sending invitations
    sendInvitesBtn.addEventListener('click', () => {
        alert('Simulating: Invitations have been sent to all guests with "Not Replied" status.');
    });

    // Initial render
    renderGuestList();
});
