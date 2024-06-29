document.getElementById('sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let formIsValid = true;

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Clear previous error states and placeholders
  [firstName, lastName, email, password].forEach(input => {
    input.parentElement.classList.remove('error');
  });

  // Check each field
  if (firstName.value === "") {
    firstName.parentElement.classList.add('error');
    formIsValid = false;
  }
  if (lastName.value === "") {
    lastName.parentElement.classList.add('error');
    formIsValid = false;
  }
  if (email.value === "" || !validateEmail(email.value)) {
    email.parentElement.classList.add('error');
    formIsValid = false;
  }
  if (password.value === "") {
    password.parentElement.classList.add('error');
    formIsValid = false;
  }

  if (formIsValid) {
    alert("Form submitted successfully!");
    // Further actions, such as sending the form data to a server, can be added here.
  }
});

// Validate email format
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

// Real-time validation and placeholder management
document.querySelectorAll('.input-container input').forEach(input => {
  input.addEventListener('input', function() {
    const parentContainer = this.parentElement;
    
    // Remove error styles and reset placeholder on valid input
    if (parentContainer.classList.contains('error')) {
      if (this.id === 'email') {
        if (validateEmail(this.value)) {
          parentContainer.classList.remove('error');
        }
      } else if (this.value.trim() !== "") {
        parentContainer.classList.remove('error');
      }
    }

    // Manage sample email visibility
    if (this.id === 'email') {
      const sampleEmail = parentContainer.querySelector('.sample-email');
      if (validateEmail(this.value)) {
        sampleEmail.style.display = 'none';
      } else {
        sampleEmail.style.display = 'block';
      }
    }
  });
});
