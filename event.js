
// Get the event details from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');

const eventDetailsData = {
    1: {
        name: 'Praise and Worship',
        date: 'Every Wednesday',
        time: '7 PM - 9 PM',
        location: 'Main Hall',
        description: 'Join us for an evening of praise and worship.',
        price: 'Free',
        
    },
    2: {
        name: 'Womens Conference',
        date: '18 June 2024',
        time: '9 AM - 5 PM',
        location: 'Conference Center',
        description: 'A day-long conference for women to gather, learn, and grow together.',
        price: 'Paid',
        
    },
    3: {
        name: 'Bible Study',
        date: 'Every Saturday',
        time: '10 AM - 12 PM',
        location: 'Library',
        description: 'Weekly Bible study sessions to deepen your faith.',
        price: 'Free',
        
    },
    4: {
        name: 'Two Day Retreat',
        date: '28 June 2024',
        time: 'All Day',
        location: 'Retreat Center',
        description: 'A two-day retreat for spiritual rejuvenation.',
        price: 'Paid',
        image: 'yana.jpg'
    },
    5: {
        name: 'Retreat',
        date: '2 August 2024',
        time: 'All Day',
        location: 'Retreat Center',
        description: 'A retreat for women to relax and rejuvenate.',
        price: 'Paid',
        image: 'womens_retreat.jpg'
    },
    6: {
        name: 'Feeding Program',
        date: '18 August 2024',
        time: '12 PM - 3 PM',
        location: 'Community Hall',
        description: 'A program to feed the underprivileged.',
        price: 'Donate',
        image: 'feeding_program.jpg'
    },
    7: {
        name: 'FunRun',
        date: '2 October 2024',
        time: '6 AM - 10 AM',
        location: 'City Park',
        description: 'A fun run event for all ages.',
        price: 'Paid',
        image: 'funrun.jpg'
    }
};

const event = eventDetailsData[eventId];
if (event) {
    document.getElementById('event-image').src = event.image;
    document.getElementById('event-name').textContent = event.name;
    document.getElementById('event-date').textContent = `Date: ${event.date}`;
    document.getElementById('event-time').textContent = `Time: ${event.time}`;
    document.getElementById('event-location').textContent = `Location: ${event.location}`;
    document.getElementById('event-description').textContent = event.description;
    document.getElementById('event-price').textContent = `Price: ${event.price}`;
}

// Close button event listener
document.getElementById('close-button').addEventListener('click', function() {
    window.history.back();
});

// Confirm button event listener
document.getElementById('confirm-button').addEventListener('click', function() {
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm.checkValidity()) {
        alert('Purchase confirmed!');
        window.location.href = 'index.html'; // Redirect to the home page
    } else {
        alert('Please fill in all payment details.');
    }
});


