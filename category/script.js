document.getElementById("footerYear").innerText = new Date().getFullYear();
document.getElementById("footerTopYear").innerText = new Date().getFullYear();

function buy(pesanan, harga) {
  const message = `Halo Saya Mau Beli ${pesanan}, Harga ${harga} `;
  const whatsapp = `https://wa.me/62895638069206?text=${message}`;
  open(whatsapp, `_blank`);
}

function chat() {
  const message = `Halo Min! Saya Mau Tanya nih. `;
  const whatsapp = `https://wa.me/62895638069206?text=${message}`;
  open(whatsapp, `_blank`);
}

const showAll = document.getElementById("showAll");
const baju = document.getElementById("baju");
const celana = document.getElementById("celana");
const kaosKaki = document.getElementById("kaosKaki");
const sepatu = document.getElementById("sepatu");
const jam = document.getElementById("jam");

const wrapBaju = document.getElementById("wrapBaju");
const wrapCelana = document.getElementById("wrapCelana");
const wrapKaosKaki = document.getElementById("wrapKaosKaki");
const wrapSepatu = document.getElementById("wrapSepatu");
const wrapJam = document.getElementById("wrapJam");

showAll.addEventListener("click", function() {
  wrapBaju.style.display = "block";
  wrapCelana.style.display = "block";
  wrapKaosKaki.style.display = "block";
  wrapSepatu.style.display = "block";
  wrapJam.style.display = "block";
});
baju.addEventListener("click", function() {
  wrapBaju.style.display = "block";
  wrapCelana.style.display = "none";
  wrapKaosKaki.style.display = "none";
  wrapSepatu.style.display = "none";
  wrapJam.style.display = "none";
});
celana.addEventListener("click", function() {
  wrapBaju.style.display = "none";
  wrapCelana.style.display = "block";
  wrapKaosKaki.style.display = "none";
  wrapSepatu.style.display = "none";
  wrapJam.style.display = "none";
});
kaosKaki.addEventListener("click", function() {
  wrapBaju.style.display = "none";
  wrapCelana.style.display = "none";
  wrapKaosKaki.style.display = "block";
  wrapSepatu.style.display = "none";
  wrapJam.style.display = "none";
});
sepatu.addEventListener("click", function() {
  wrapBaju.style.display = "none";
  wrapCelana.style.display = "none";
  wrapKaosKaki.style.display = "none";
  wrapSepatu.style.display = "block";
  wrapJam.style.display = "none";
});
jam.addEventListener("click", function() {
  wrapBaju.style.display = "none";
  wrapCelana.style.display = "none";
  wrapKaosKaki.style.display = "none";
  wrapSepatu.style.display = "none";
  wrapJam.style.display = "block";
});

// dark mode
const checkBox = document.getElementById("checkBox");

checkBox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
