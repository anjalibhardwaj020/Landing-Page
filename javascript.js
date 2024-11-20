// script.js

// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
});