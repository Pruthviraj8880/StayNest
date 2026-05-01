function toggleMenu() {
  let nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
function bookRoom(roomName) {
  alert("Booking confirmed for " + roomName);
}