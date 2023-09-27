document.addEventListener("DOMContentLoaded", () => {
  // Sélectionnez tous les boutons "Détails"
  const detailsButtons = document.querySelectorAll(".details-button");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector(".close-modal-button");

  // Fonction pour afficher un message de confirmation après l'envoi du formulaire de contact
  const contactForm = document.querySelector(".form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Vous pouvez ici ajouter une logique pour envoyer le formulaire au serveur (par exemple, via une requête AJAX)

    // Afficher un message de confirmation
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Votre message a été envoyé avec succès!";
    confirmationMessage.style.color = "green";
    contactForm.appendChild(confirmationMessage);

    // Réinitialiser le formulaire
    setTimeout(() => {
      confirmationMessage.remove(); // Supprime le message après quelques secondes
      contactForm.reset();
    }, 3000); // Supprime le message après 3 secondes (3000 millisecondes)
  });
  // JavaScript pour gérer le défilement de la page et l'expansion du header
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("expanded"); // Ajoute la classe "expanded" pour élargir le header
    } else {
      header.classList.remove("expanded"); // Retire la classe "expanded" pour réduire le header
    }
  });

  /* JavaScript pour mettre à jour l'indicateur de progression de défilement */
  document.addEventListener("scroll", function () {
    const scrollIndicator = document.querySelector(".indicator-fill");
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    scrollIndicator.style.width = scrollPercent + "%";
  });
});
