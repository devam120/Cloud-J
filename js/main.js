const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item =>
    item.addEvenListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
));
