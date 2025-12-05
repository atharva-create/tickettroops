/**
 * Load Calendar Events from CSV Files
 * Populates the events page tables with data from sports.csv and shows.csv
 */

async function loadCalendarEvents() {
    try {
        // Load sports events from CSV
        const sportsEvents = await parseCSV('sports.csv');
        const sportsTbody = document.getElementById('events-sports-tbody');

        if (sportsTbody && sportsEvents.length > 0) {
            // Clear any existing rows
            sportsTbody.innerHTML = '';

            // Add rows for each event
            sportsEvents.forEach(event => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${event.name}</td>
                    <td>${event.location}</td>
                    <td>${event.months}</td>
                `;
                sportsTbody.appendChild(row);
            });
        }

        // Load entertainment events from CSV
        const showsEvents = await parseCSV('shows.csv');
        const showsTbody = document.getElementById('events-entertainment-tbody');

        if (showsTbody && showsEvents.length > 0) {
            // Clear any existing rows
            showsTbody.innerHTML = '';

            // Add rows for each event
            showsEvents.forEach(event => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${event.name}</td>
                    <td>${event.location}</td>
                    <td>${event.months}</td>
                `;
                showsTbody.appendChild(row);
            });
        }

        console.log('Calendar events loaded successfully');
    } catch (error) {
        console.error('Error loading calendar events:', error);
    }
}

// Load events when the page is ready
document.addEventListener('DOMContentLoaded', loadCalendarEvents);
