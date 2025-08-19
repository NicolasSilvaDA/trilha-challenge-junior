const divToggleParaSelect = document.querySelectorAll(".list-element-showhide");

divToggleParaSelect.forEach((elem) => {
    elem.addEventListener("click", () => {
        const paragSelect = elem.parentElement.querySelector(".list-element-p");
        const arrowSelect = elem.parentElement.querySelector(".list-element-showhide-arrow");

        arrowSelect.classList.toggle("rotated");
        
        if(paragSelect.classList.contains("expanded")) {
            paragSelect.style.height = paragSelect.scrollHeight + 'px';
            requestAnimationFrame(() => {
                paragSelect.style.height = '0px';
            });
            paragSelect.classList.remove('expanded');
            // paragSelect.style.paddingTop = '0px';
        } else {
            paragSelect.classList.add('expanded');
            const height = paragSelect.scrollHeight + 'px';
            paragSelect.style.height = height;
            // paragSelect.style.paddingTop = '12px';
        }
    });
});

const barMenuEl = document.querySelector(".bar-menu");
const menuEl = document.querySelector('#links-group');

barMenuEl.addEventListener("click", () => {
    menuEl.classList.toggle("out-of-screen");
});
