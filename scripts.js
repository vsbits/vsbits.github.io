function toggleMenu(){
    toggle = document.getElementById("toggle-menu");
    navbar = document.getElementById("navbar");
    value = toggle.innerHTML;
    switch (value) {
        case "☰":
            toggle.innerHTML = "✕";
            navbar.classList.remove("closed")
            break;
        default:
            toggle.innerHTML = "☰";
            navbar.classList.add("closed")
    };
};