document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const sheetName = urlParams.get('sheetName');
    const sheetTitle = document.getElementById('sheet-title');
    const contentContainer = document.getElementById('content-container');
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxXJYka1JuuMi0HhUdIl-0ROQgYsfNppyWNrzX76pnUfOtVTpyDSDDRBZQzF96yRqNW/exec';

    sheetTitle.textContent = sheetName;

    fetch(`${apiUrl}?sheetName=${sheetName}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(row => {
                const rowElement = document.createElement('div');
                rowElement.className = 'row';
                rowElement.textContent = row.join(', ');
                contentContainer.appendChild(rowElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
