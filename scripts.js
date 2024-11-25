// Carga de apertura
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.display = "none"; // Ocultar el loader
        mainContent.style.display = "block"; // Mostrar el contenido principal
        document.body.style.overflow = "auto"; // Permitir el desplazamiento
    }, 1000); // Tiempo sincronizado con la animación
});

// Cambio de lenguaje
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLang = this.getAttribute("data-lang");

    if (currentLang === "en") {
        // Cambiar a español
        document.querySelectorAll(".categories a")[0].textContent = "Habilidades";
        document.querySelectorAll(".categories a")[1].textContent = "Experiencia";
        document.querySelectorAll(".categories a")[2].textContent = "Proyectos";
        document.querySelectorAll(".categories a")[3].textContent = "Sobre mí";

        document.querySelector(".text-container p").textContent = "Disponible para trabajar";

        document.querySelectorAll(".icon-link span")[0].textContent = "Contáctame";
        document.querySelectorAll(".icon-link span")[1].textContent = "LinkedIn";
        document.querySelectorAll(".icon-link span")[2].textContent = "Discord";

        document.querySelector(".welcome-content h1").textContent = "Hola, soy Kovak";
        document.querySelector(".welcome-content p").textContent =
            "Soy una diseñadora de gráfico UX/UI con experiencia. Estoy dispuesta a contribuir y dar lo mejor de mis habilidades. Puedo comunicarme en español e inglés con fluidez. 😊";

        document.querySelector("#skills h2").innerHTML =
            '<img src="./img/skills.png" alt="Icono de habilidades" class="skills-icon"> Habilidades';
        document.querySelectorAll(".skill-item h3")[0].textContent = "Adobe Photoshop";
        document.querySelectorAll(".skill-item h3")[1].textContent = "After Effects";
        document.querySelectorAll(".skill-item h3")[2].textContent = "Adobe Illustrator";
        document.querySelectorAll(".skill-item h3")[3].textContent = "Effect House";
        document.querySelectorAll(".skill-item h3")[4].textContent = "Unreal Engine";

        document.querySelectorAll(".skill-item p")[0].textContent = "Soluciones creativas para desafíos.";
        document.querySelectorAll(".skill-item p")[1].textContent = "Cumplo en tiempo y calidad.";
        document.querySelectorAll(".skill-item p")[2].textContent = "Uso avanzado para todo tipo de diseño.";
        document.querySelectorAll(".skill-item p")[3].textContent = "Complementando diseños eficientemente.";
        document.querySelectorAll(".skill-item p")[4].textContent = "Animaciones avanzadas y efectos.";

        document.querySelector("#work-experience h2").innerHTML =
            '<img src="./img/exp.png" alt="Icono de experiencia laboral" class="experience-icon"> Experiencia laboral';
        document.querySelectorAll(".timeline-content h3")[0].textContent = "Diseño Gráfico";
        document.querySelectorAll(".timeline-content h3")[1].textContent = "Creador de Filtros";
        document.querySelectorAll(".timeline-content h3")[2].textContent = "Estrategia de Marketing";

        document.querySelectorAll(".timeline-content strong")[0].textContent = "UX/UI | Photoshop";
        document.querySelectorAll(".timeline-content strong")[1].textContent = "Effect House | Spark Meta";
        document.querySelectorAll(".timeline-content strong")[2].textContent = "Mejora en Redes Sociales";

        document.querySelectorAll(".timeline-detail")[0].textContent = "Actualmente...";
        document.querySelectorAll(".timeline-detail")[1].textContent = "Actualmente...";
        document.querySelectorAll(".timeline-detail")[2].textContent = "Actualmente...";

        document.querySelectorAll(".timeline-description")[0].textContent =
            "Me especializo en diseño gráfico UX/UI y creaciones en general. Soy creativo con buenas habilidades para diseñar desde temas simples hasta complejos y cumplir expectativas.";
        document.querySelectorAll(".timeline-description")[1].textContent =
            "Creo filtros para diferentes plataformas completamente personalizados por encargo. Puedo crearlos en 3D o según sea necesario.";
        document.querySelectorAll(".timeline-description")[2].textContent =
            "Análisis y propuesta para maximizar la presencia en línea de las empresas.";

        document.querySelector("#projects h2").innerHTML =
            '<img src="./img/project.png" alt="Icono de proyectos" class="projects-icon"> Proyectos';
        document.querySelectorAll(".project-info h3")[0].textContent = "Head & Shoulders";
        document.querySelectorAll(".project-info h3")[1].textContent = "Herbal Essence Manuka Honey";

        document.querySelectorAll(".project-info p")[0].textContent =
            "Realizado en una semana después de la propuesta y ejemplo con más de 3M de vistas en Instagram.";
        document.querySelectorAll(".project-info p")[1].textContent =
            "Realizado en 4 días después de la propuesta y ejemplo con 1M de vistas en Instagram.";

        document.querySelector("#about-me h2").innerHTML =
            '<img src="./img/aboutme.png" alt="Icono de sobre mí" class="about-me-icon"> Sobre mí';
        document.querySelector(".about-content").innerHTML =
            "<p>Mi nombre es Rosario Kovak, actualmente soy una <span class='highlight'>diseñadora de gráfico UX/UI</span> y <span class='highlight'>creadora de filtros con años de experiencia</span>. También sé español e inglés y puedo comunicarme con fluidez. Conozco sobre desarrollo de software y me gusta continuar aprendiendo para mejorar mis capacidades.</p>" +
            "<p>He participado en diferentes tipos de proyectos y estoy lista para participar en su empresa y dar lo mejor de mí. Estoy comprometida con cumplir las mejores expectativas. <span class='highlight'>Algunas de mis participaciones incluyen diseñar y crear filtros para 'Head & Shoulders' y 'Herbal Essence Manuka Honey', completamente personalizados para adaptarse a sus pedidos.</span></p>" +
            "<p>Soy bastante creativa y tengo una iniciativa positiva. Sé trabajar en diferentes tipos de grupos, ya sea sola, en dúo o en grupo, y puedo adaptarme rápidamente a diferentes formas de trabajo. Tengo las mejores habilidades para crear cualquier tipo de diseño.</p>";

        document.querySelector(".footer-left p").textContent = "© 2024 Kovak | Todos los derechos reservados";

        this.setAttribute("data-lang", "es");
    } else {
        // Cambiar a inglés
        document.querySelectorAll(".categories a")[0].textContent = "Skills";
        document.querySelectorAll(".categories a")[1].textContent = "Experience";
        document.querySelectorAll(".categories a")[2].textContent = "Projects";
        document.querySelectorAll(".categories a")[3].textContent = "About me";

        document.querySelector(".text-container p").textContent = "Available to work";

        document.querySelectorAll(".icon-link span")[0].textContent = "Contact Me";
        document.querySelectorAll(".icon-link span")[1].textContent = "LinkedIn";
        document.querySelectorAll(".icon-link span")[2].textContent = "Discord";

        document.querySelector(".welcome-content h1").textContent = "Hi, I am Kovak";
        document.querySelector(".welcome-content p").textContent =
            "I am a UX/UI graphic designer, with experience, I am willing to contribute and give the best of my abilities, I can communicate in Spanish and English fluently. 😊";

        document.querySelector("#skills h2").innerHTML =
            '<img src="./img/skills.png" alt="Skills Icon" class="skills-icon"> Skills';
        document.querySelectorAll(".skill-item h3")[0].textContent = "Adobe Photoshop";
        document.querySelectorAll(".skill-item h3")[1].textContent = "After Effects";
        document.querySelectorAll(".skill-item h3")[2].textContent = "Adobe Illustrator";
        document.querySelectorAll(".skill-item h3")[3].textContent = "Effect House";
        document.querySelectorAll(".skill-item h3")[4].textContent = "Unreal Engine";

        document.querySelectorAll(".skill-item p")[0].textContent = "Creative solutions for challenges.";
        document.querySelectorAll(".skill-item p")[1].textContent = "I deliver on time and with quality.";
        document.querySelectorAll(".skill-item p")[2].textContent = "Advanced use for all design types.";
        document.querySelectorAll(".skill-item p")[3].textContent = "Complementing designs efficiently.";
        document.querySelectorAll(".skill-item p")[4].textContent = "Advanced animations and effects.";

        document.querySelector("#work-experience h2").innerHTML =
            '<img src="./img/exp.png" alt="Work Icon" class="experience-icon"> Work Experience';
        document.querySelectorAll(".timeline-content h3")[0].textContent = "Graphic Design";
        document.querySelectorAll(".timeline-content h3")[1].textContent = "Filter Creator";
        document.querySelectorAll(".timeline-content h3")[2].textContent = "Marketing Strategy";

        document.querySelectorAll(".timeline-content strong")[0].textContent = "UX/UI | Photoshop";
        document.querySelectorAll(".timeline-content strong")[1].textContent = "Effect House | Spark Meta";
        document.querySelectorAll(".timeline-content strong")[2].textContent = "Social Media Enhancement";

        document.querySelectorAll(".timeline-detail")[0].textContent = "Currently...";
        document.querySelectorAll(".timeline-detail")[1].textContent = "Currently...";
        document.querySelectorAll(".timeline-detail")[2].textContent = "Currently...";

        document.querySelectorAll(".timeline-description")[0].textContent =
            "I specialize in UX/UI graphic design and creations in general. I am creative with good skills to design from simple to complex themes and meet expectations.";
        document.querySelectorAll(".timeline-description")[1].textContent =
            "I create filters for different types of platforms completely customized to order. I can create them in 3D or as needed.";
        document.querySelectorAll(".timeline-description")[2].textContent =
            "Analysis and proposal to maximize online presence of the companies.";

        document.querySelector("#projects h2").innerHTML =
            '<img src="./img/project.png" alt="Projects Icon" class="projects-icon"> Projects';
        document.querySelectorAll(".project-info h3")[0].textContent = "Head & Shoulders";
        document.querySelectorAll(".project-info h3")[1].textContent = "Herbal Essence Manuka Honey";

        document.querySelectorAll(".project-info p")[0].textContent =
            "Made in one week after proposal and example with over 3M views on Instagram.";
        document.querySelectorAll(".project-info p")[1].textContent =
            "Made in 4 days after proposal and example with 1M views on Instagram.";

        document.querySelector("#about-me h2").innerHTML =
            '<img src="./img/aboutme.png" alt="About Me Icon" class="about-me-icon"> About Me';
        document.querySelector(".about-content").innerHTML =
            "<p>My name is Rosario Kovak, I am currently a <span class='highlight'>UX/UI Graphic Designer</span> and <span class='highlight'>Filter Creator with years of experience</span>. I also know Spanish and English and can communicate fluently. I know about software development and enjoy continuous learning to improve my capabilities.</p>" +
            "<p>I have participated in different types of projects and I am ready to participate in your company and give my best. I am committed to meeting the best expectations. <span class='highlight'>Some of my participations include designing and creating filters for 'Head & Shoulders' and 'Herbal Essence Manuka Honey', completely personalized to suit your orders.</span></p>" +
            "<p>I am quite creative and have a positive initiative. I know how to work in different types of groups, whether alone, in a duo, or in a group, and I can quickly adapt to different ways of working. I have the best skills to create any type of design.</p>";

        document.querySelector(".footer-left p").textContent = "© 2024 Kovak | All rights reserved";

        this.setAttribute("data-lang", "en");
    }
});

// Código para las categorías 
document.querySelectorAll('.categories a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Reproductor de videos
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video');
        const videoElement = document.getElementById(videoId);

        if (videoElement.paused) {
            videoElement.play();
            this.style.display = 'none'; // Oculta el botón mientras se reproduce el video
        } else {
            videoElement.pause();
            this.style.display = 'block'; // Muestra el botón si el video se pausa
        }
    });
});

