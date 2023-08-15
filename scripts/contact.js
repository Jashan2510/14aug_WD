// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// Get reference to the submit button
const submitButton = document.getElementById('submit-button');

// Add event listener to submit button
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission (if needed)
  
  // Replace contact page contents with "Thank you for your message" message
  const contactPage = document.getElementById('contact-page');
  contactPage.innerHTML = '<p class="large-text">Thank you for your message!</p>';

  // Change the font size of the message using the style property
  const thank_You_Message = contactPage.querySelector('p');
  thank_You_Message.style.fontSize = '24px';

  // Update the class list to apply additional styling
  thank_You_Message.classList.add('thank-you-style'); // Add your desired class name
});



// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

