let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let newButton = document.getElementById("newButton");

function generateQR() {
    if (qrText.value.length > 0) {
        // Generate QR Code
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

        // Ensure the image and box are visible smoothly
        imgBox.classList.add("show-img");
        qrImage.style.opacity = 1; // Make the image fully visible
        newButton.style.opacity = 1; // Make the "New" button fully visible
        newButton.style.display = 'block'; // Show the "New" button
    } else {
        qrText.classList.add('error');

        // Remove the error after 1 second
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

function resetForm() {
    // Clear the input field
    qrText.value = '';

    // Fade out the QR code and the "New" button
    qrImage.style.opacity = 0; // Fade out the image
    imgBox.classList.remove("show-img"); // Collapse the image box smoothly

    // Fade out the "New QR Code" button
    newButton.style.opacity = 0;

    // Set timeout to hide the "New" button after it has faded out
    setTimeout(() => {
        newButton.style.display = 'none'; // Hide the button after fading out
        qrImage.src = ''; // Clear the image source after transition
    }, 500); // Delay to match the transition duration
}

// Event listener to trigger QR code generation on Enter key press
qrText.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') { // Check if Enter key was pressed
        generateQR(); // Trigger the QR code generation
    }
});

// Clear input field on page refresh
document.addEventListener("DOMContentLoaded", () => {
    qrText.value = ''; // Limpa o campo de entrada ao carregar a página
});
