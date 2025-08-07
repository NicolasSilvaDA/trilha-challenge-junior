const divToggleParaSelect = document.querySelectorAll(".list-element-showhide");

divToggleParaSelect.forEach((elem) => {
    elem.addEventListener("click", () => {
        const paragSelect = elem.parentElement.querySelector(".list-element-p");
        const arrowSelect = elem.parentElement.querySelector(".list-element-showhide-arrow");

        paragSelect.classList.toggle("hidden");
        // arrowSelect.classList.
    });
});