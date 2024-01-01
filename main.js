document.addEventListener("DOMContentLoaded", function () {

    const text_to_copy = document.querySelectorAll(".b-text.b-text_copy");
    const modal = document.getElementById("modal");

    text_to_copy.forEach(el => {
        el.addEventListener("click", function (e) {
            console.log(e.target.textContent)
            navigator.clipboard.writeText(e.target.textContent);
            console.log(`copied ${e.target.textContent}`);
            modal.classList.add("animate");
            setTimeout(() => { modal.classList.remove("animate"); }, 1000);
        });
    });
});