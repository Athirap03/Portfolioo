document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Show thank you message
  document.getElementById('thank-you-message').style.display = 'block';
  
  // Optionally clear form
  this.reset();
});