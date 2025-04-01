document.addEventListener("DOMContentLoaded", function() {
    function showSection(sectionId) {
        document.querySelectorAll(".content-section").forEach(section => {
            section.style.display = "none";
        });

        document.getElementById(sectionId).style.display = "block";
    }

    showSection("about");

    window.showSection = showSection;
});
