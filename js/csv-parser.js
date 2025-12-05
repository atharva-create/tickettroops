/**
 * CSV Parser Utility
 * Parses CSV files and returns event data
 */

async function parseCSV(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        }

        const text = await response.text();
        const lines = text.trim().split('\n');

        // Skip header row
        const events = [];
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue; // Skip empty lines

            // Handle CSV with quoted fields containing commas
            const values = parseCSVLine(line);

            if (values[0]) { // Ensure we have an event name
                const event = {
                    name: values[0],
                    location: values[1] || '',
                    months: values[2] || ''
                };
                events.push(event);
            }
        }

        return events;
    } catch (error) {
        console.error('Error parsing CSV:', error);
        return [];
    }
}

/**
 * Parse a single CSV line, handling quoted fields
 */
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }

    // Push the last value
    values.push(current.trim());

    return values;
}
