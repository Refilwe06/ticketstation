document.addEventListener('DOMContentLoaded', function() {
    const pastEventModal = document.getElementById('pastEventModal');
    const closeModalButton = document.querySelector('.close-button');

    const pastEventDetails = {
        8: {
            name: 'Past Event 1',
            date: '1 January 2024',
            time: '10 AM - 12 PM',
            location: 'Main Hall',
            description: 'Details about past event 1.',
            
        },
        9: {
            name: 'Past Event 2',
            date: '15 February 2024',
            time: '2 PM - 4 PM',
            location: 'Conference Center',
            description: 'Details about past event 2.',
           
        }
    };

    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            const event = pastEventDetails[eventId];
            if (event) {
              
                document.getElementById('past-event-name').textContent = event.name;
                document.getElementById('past-event-date').textContent = `Date: ${event.date}`;
                document.getElementById('past-event-time').textContent = `Time: ${event.time}`;
                document.getElementById('past-event-location').textContent = `Location: ${event.location}`;
                document.getElementById('past-event-description').textContent = event.description;
                pastEventModal.style.display = 'block';
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        pastEventModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === pastEventModal) {
            pastEventModal.style.display = 'none';
        }
    });
});
