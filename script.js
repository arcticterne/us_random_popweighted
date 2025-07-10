// Get a reference to the button element using its ID
const runJsButton = document.getElementById('runJsButton');

// Get a reference to the div where we want to display the output
const outputArea = document.getElementById('outputArea');

// Add an event listener to the button
// When the button is clicked, the function inside will be executed
runJsButton.addEventListener('click', () => {
    // 1. Define the JavaScript logic to run
    // For this example, we'll generate a random integer between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // 2. Create the output string
    const outputMessage = `Your random number is: ${randomNumber}`;

    // 3. Output the result to the designated HTML element
    // We update the textContent of the outputArea div
    outputArea.textContent = outputMessage;

    // You could also add more complex logic here, for example:
    // - Making an API call (to another server)
    // - Performing calculations based on user input (if you add input fields)
    // - Changing styles or other elements on the page
});

// Optional: Initial message in the output area when the page loads
document.addEventListener('DOMContentLoaded', () => {
    outputArea.textContent = "Click the button!";
});
