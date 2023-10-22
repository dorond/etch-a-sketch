const btn = document.querySelector("#requestgrid");
let gridSize = null;
btn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".block");

    boxes.forEach((box) => {
        box.remove();
    });

    gridSize = prompt("Enter your grid size", 64);
    if (gridSize > +100) {
        alert("Cannot enter a grid bigger than 100x100, please try again");
    } else {
        const container = document.querySelector(".container");
        const blockWidth = container.clientWidth / gridSize;
        const blockHeight = container.clientHeight / gridSize;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let div = document.createElement("div");
                div.style.width = blockWidth + "px";
                div.style.height = blockHeight + "px";
                div.style.border = "1px solid blue";
                div.classList.add("block");

                div.addEventListener("mouseenter", () => {
                    const r = Math.floor(Math.random() * 255);
                    const g = Math.floor(Math.random() * 255);
                    const b = Math.floor(Math.random() * 255);
                    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                });

                container.appendChild(div);
            }
        }
    }
});
