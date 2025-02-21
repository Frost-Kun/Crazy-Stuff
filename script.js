document.addEventListener("DOMContentLoaded", function () {
    const hour = document.querySelector(".hour");
    const dot = document.querySelector(".dot");
    const min = document.querySelector(".min");
    const week = document.querySelector(".week");
    let showDot = true;

    function update() {
        const now = new Date();

        // Dot 2.
        showDot = !showDot;
        dot.style.opacity = showDot ? "1" : "0";

        // Hours and Minutes
        hour.textContent = String(now.getHours()).padStart(2, "0");
        min.textContent = String(now.getMinutes()).padStart(2, "0");

        // document
        document.querySelectorAll(".week div").forEach((ele) => {
            ele.classList.remove("Active");
        });

        // Add more class active for days
        const dayIndex = now.getDay(); // for 0 is Sunday, 1 is Monday
        week.children[dayIndex].classList.add("Active");
    }

    // Update every 500ms
    setInterval(update, 500);
    update();
});
