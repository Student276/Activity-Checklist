document.getElementById('activity-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${name} - ${activity} - ${date} - ${time}</span>
        <input type="checkbox" class="check-activity">
        <button class="delete-activity">Delete</button>
    `;

    // Add event listener to the checkbox
    li.querySelector('.check-activity').addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Add event listener to the delete button
    li.querySelector('.delete-activity').addEventListener('click', function() {
        li.remove();
    });

    // Add the new list item to the activity list
    document.getElementById('activity-list').appendChild(li);

    // Clear the form
    document.getElementById('activity-form').reset();
});
