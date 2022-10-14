// Empty
const contactForm = document.getElementById("contactForm");
const formText = document.getElementById("formText");

//addEventListener on submit form.
//preventDefault method to prevent the info you put in the form to be displayed in the URL.
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Saving the form data in an variable and get access to "firstName".
  const contactFormData = new FormData(contactForm);
  const firstName = contactFormData.get("firstName");

  // Using the firstname you type in the form to display a message.
  formText.textContent = `Takk ${firstName} for din interesse i solsystemet. Din epost er nå sendt og vi kontakter deg så raskt som mulig.`;
});
