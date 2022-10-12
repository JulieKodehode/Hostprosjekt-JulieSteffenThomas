// Empty
const contactForm = document.getElementById("contactForm");
const formText = document.getElementById("formText");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const contactFormData = new FormData(contactForm);
  const firstName = contactFormData.get("firstName");

  formText.textContent = `Takk ${firstName} for din interesse i solsystemet. Din epost er nå sendt og vi kontakter deg så raskt som mulig.`;
});
