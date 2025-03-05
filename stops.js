async function fetchCurrentStop() {
    const response = await fetch('https://api.github.com/repos/MGETZ-io/bus21-2/contents/stops.json', {
        headers: {
            'Authorization': 'Bearer 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'
        }
    });

    const data = await response.json();
    const fileContent = atob(data.content); // Base64-kodierten Inhalt decodieren
    const stopsData = JSON.parse(fileContent);
    
    const currentStop = stopsData.currentStop;
    console.log('Aktueller Halt:', currentStop);

    // Zeigt den aktuellen Halt an
    document.getElementById('currentStop').textContent = `Aktueller Halt: ${currentStop}`;

    // Listet alle Haltestellen auf
    const stopList = stopsData.stops.map(stop => `<div>${stop}</div>`).join('');
    document.getElementById('stopList').innerHTML = stopList;
}

// Aufrufen der Funktion beim Laden der Seite
fetchCurrentStop();
