document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('cards-container');
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxXJYka1JuuMi0HhUdIl-0ROQgYsfNppyWNrzX76pnUfOtVTpyDSDDRBZQzF96yRqNW/exec';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(sheetName => {
                const card = document.createElement('div');
                card.className = 'card';
                card.textContent = sheetName;
                card.addEventListener('click', () => {
                    window.location.href = `content.html?sheetName=${sheetName}`;
                });
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
