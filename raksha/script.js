const card = document.getElementById("greetingCard");
card.addEventListener("click", () => {
  card.classList.add("opened");
});

function showPhotoBook() {
  document.getElementById("photoBook").style.display = "flex";
}

function highlightPhoto(el, message) {
  const allPhotos = document.querySelectorAll(".photo");
  allPhotos.forEach(photo => photo.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("photoMessage").textContent = message;
}
