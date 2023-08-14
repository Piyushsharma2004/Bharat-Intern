document.addEventListener('DOMContentLoaded', function() {
    var selectedOption = document.getElementById('selected-option');
    var optionsList = document.getElementById('options-list');

    selectedOption.addEventListener('click', function() {
        optionsList.classList.toggle('show');
    });

    optionsList.addEventListener('click', function(event) {
        var selectedValue = event.target.getAttribute('data-value');
        var selectedText = event.target.textContent;
        selectedOption.textContent = selectedText;
        optionsList.classList.remove('show');
    });
});