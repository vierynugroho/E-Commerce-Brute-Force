document.getElementById("footerYear").innerText = new Date().getFullYear();
// dark mode
const checkBox = document.getElementById("checkBox");

checkBox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function chat() {
  const message = `Halo Min! Saya Mau Tanya nih. `;
  const whatsapp = `https://wa.me/62895638069206?text=${message}`;
  open(whatsapp, `_blank`);
}
