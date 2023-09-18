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

    // Définissez la fonction pour afficher les images en fonction de la catégorie sélectionnée
    function filterImages(category) {
        // Récupérez la div du portfolio à l'intérieur de cette fonction
        const portfolioContainer = document.querySelector('.portfolio-container');
    
        // Vérifiez si la div du portfolio existe
        if (!portfolioContainer) {
            console.error("La div du portfolio n'a pas été trouvée.");
            return;
        }
    
        // ... Le reste de votre code ici ...
    }
    
    // Attendez que le document HTML soit complètement chargé
    document.addEventListener('DOMContentLoaded', function () {
        // Définissez la fonction pour ajouter des gestionnaires d'événements aux boutons de filtrage
        function addFilterEventListeners() {
            // Sélectionnez les boutons de filtrage par catégorie
            const filterButtons = document.querySelectorAll('.portfolio-filters button');
    
            // Attachez un gestionnaire d'événement à chaque bouton
            filterButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    // Obtenez la catégorie à partir de l'attribut data-category du bouton
                    const category = button.getAttribute('data-category');
    
                    // Appelez la fonction de filtrage avec la catégorie sélectionnée
                    filterImages(category);
                });
            });
        }
    
        // Appelez la fonction pour ajouter des gestionnaires d'événements aux boutons de filtrage
        addFilterEventListeners();
    
        // Affichez toutes les images au chargement initial de la page en utilisant la catégorie 'all'
        filterImages('all');
    
        // Récupérez la div du carrousel
        const carousel = document.querySelector('.carousel');
    
        // Boucle à travers les projets et créez les éléments de diapositive du carrousel
        projects.forEach((project) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            const carouselImage = document.createElement('img');
            carouselImage.src = project.imageSrc;
            carouselImage.alt = project.name;
            carouselItem.appendChild(carouselImage);
    
            // Ajoutez l'élément de diapositive au carrousel
            carousel.appendChild(carouselItem);
        });
    });