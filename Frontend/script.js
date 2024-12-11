let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menubar");
let menuBarContainer = document.getElementById("menubar-container");

menuIcon.addEventListener("click", () => {
    if(menubar.classList.contains("hidden")){
        menubar.classList.remove("hidden", "w-0");
        menuBarContainer.remove("hidden");
        menubar.classList.add("sm:w-[40vw]", "w-[100vw]", "visible");
        menuBarContainer.add("visible");
    } else {
        menubar.classList.remove("sm:w-[40vh]", "w-[100vw]", "visible");
        menuBarContainer.remove("visible");
        menubar.classList.add("hidden", "w-0");
        menuBarContainer.add("hidden");
    }
});