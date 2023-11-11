document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', function() {
        event.preventDefault();  // Prevent default form submission
        const query = encodeURIComponent(document.getElementById('search').value);
        fetch('superheroes.php?query=' + query)
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
