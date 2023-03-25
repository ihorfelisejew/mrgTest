function activeMenu(){
    let element = document.querySelectorAll(".menu-active");
    element.forEach(oneActive => {
        oneActive.classList.remove("menu-active");
    });

    document.addEventListener("click", function (e) {
        e.target.classList.add("menu-active");
    });
}