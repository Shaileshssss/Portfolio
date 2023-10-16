document.getElementById('icon').addEventListener('click', function () {
    var information = document.getElementById('information');
    information.style.display = 'block';

    document.getElementById('close-button').addEventListener('click', function () {
        information.style.display = 'none';
    });
});
