// Variables globales
let currentImageIndex = 0;
const carousel = document.querySelector('.carousel');
const projects = [
        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/coiffeuserousse.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/backgroundwhite.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/barbumiroir.jpg",
            category: "all, collaboration",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/beigededos.jpg",
            category: "all, collaboration",
        },

            {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/blondebat.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/blondesouriante.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/bodybuilder.jpg",
            category: "all, collaboration, shooting, evenementiel",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/doublefrere.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/locksbeige.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/locksviolet.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/locksvioletbat.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/locksvoiture.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/misscoiffure.jpg",
            category: "all, shooting, evenementiel",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/misscoiffureprofile.jpg",
            category: "all, shooting, evenementiel",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/peinturemoustachu.jpg",
            category: "all, shooting, collaboration",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/promo.jpg",
            category: "all, collaboration, promotion",
        },

            {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/roussededos.jpg",
            category: "all, shooting, collaboration",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/samilumière.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/saminoirblanc.jpg",
            category: "all, shooting",
        },

        {
            name: "Nom du projet 1",
            description: "Description courte du projet 1.",
            details: "Description détaillée du projet 1.",
            date: "XX/XX/XXXX",
            technologies: "HTML, CSS, JavaScript",
            imageSrc: "../images/tailleurlumiere.jpg",
            category: "all, shooting, collaboration",
        },
    ];
// Fonction pour afficher une image spécifique du carrousel
function showImage(index) {
    const translateX = -index * 100 + '%'; // Calcul de la valeur 'translateX'
    carousel.style.transform = `translateX(${translateX})`;
}

// Fonction pour afficher l'image suivante automatiquement
function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= portfolioItems.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

// Démarrez le défilement automatique toutes les X millisecondes (par exemple, 3000 ms)
const autoScrollInterval = 3000; // Réglez l'intervalle en millisecondes
let autoScrollTimer = setInterval(showNextImage, autoScrollInterval);

// Arrêtez le défilement automatique lorsque la souris passe sur le carrousel
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoScrollTimer);
});

// Redémarrez le défilement automatique lorsque la souris quitte le carrousel
carousel.addEventListener('mouseleave', () => {
    autoScrollTimer = setInterval(showNextImage, autoScrollInterval);
});

// Fonction pour gérer le clic sur le bouton "Suivant"
function handleNextButtonClick() {
    currentImageIndex++;
    if (currentImageIndex >= portfolioItems.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

// Fonction pour gérer le clic sur le bouton "Précédent"
function handlePrevButtonClick() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = portfolioItems.length - 1;
    }
    showImage(currentImageIndex);
}

// Attachez des gestionnaires d'événements aux boutons "Suivant" et "Précédent"
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);

// Fonction pour afficher les superpositions d'images au survol
portfolioItems.forEach((item) => {
    const imageOverlay = item.querySelector('.image-overlay');
    const overlayContent = item.querySelector('.overlay-content');

    item.addEventListener('mouseenter', () => {
        imageOverlay.style.opacity = 1;
        imageOverlay.style.transform = 'translateY(0)';
        overlayContent.style.opacity = 1;
    });

    item.addEventListener('mouseleave', () => {
        imageOverlay.style.opacity = 0;
        imageOverlay.style.transform = 'translateY(-100%)';
        overlayContent.style.opacity = 0;
    });
});