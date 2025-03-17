document.addEventListener("DOMContentLoaded", function() {
    function showSection(sectionId) {
        document.querySelectorAll(".content-section").forEach(section => {
            section.style.display = "none";
        });

        document.getElementById(sectionId).style.display = "block";
    }

    // Pokazanie domyślnej sekcji
    showSection("about");

    // Globalna funkcja do obsługi kliknięć
    window.showSection = showSection;
});
