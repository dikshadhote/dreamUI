let hamBurger = document.getElementById("drawer-hamberg-btn");
let drawer = document.getElementById("drawer");
let close = document.getElementById("close");

const displayDrawer = () => {
  drawer.style.display = "block";
};

const closeDrawer = () => {
  drawer.style.display = "none";
};

hamBurger.addEventListener("click", displayDrawer);

close.addEventListener("click", closeDrawer);
