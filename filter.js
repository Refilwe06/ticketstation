document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const eventCards = document.querySelectorAll('.event-card');

    function filterEvents() {
        const searchValue = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        eventCards.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            const type = card.getAttribute('data-type');

            if ((filterValue === 'all' || type === filterValue) &&
                (title.includes(searchValue))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterEvents);
    filterSelect.addEventListener('change', filterEvents);
});

