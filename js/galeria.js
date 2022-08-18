const galeria = document.querySelectorAll(".img-nimbus img");
const mudarGaleria = document.querySelector(".img-nimbus");
console.log("galeria");

function mudarImg(event) {
  const img = event.currentTarget;

  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    mudarGaleria.prepend(img);
  }
}
function eventoImg(img) {
  img.addEventListener("click", mudarImg);
}

galeria.forEach(eventoImg);

