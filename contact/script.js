document.getElementById("footerYear").innerText = new Date().getFullYear();

function sendMessage() {
  const nama = document.getElementById("nama").value;
  const textarea = document.getElementById("message").value;
  const message = `Halo Saya ${nama}.   ${textarea} `;
  const whatsapp = `https://wa.me/62895638069206?text=${message}`;
  open(whatsapp, `_blank`);
}

// dark mode
const checkBox = document.getElementById("checkBox");

checkBox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// email
// function sendEmail() {s
//   Email.send({
//     secureToken: "20278573-4c05-4e4e-a68a-408323b92690",
//     Host: "smtp.yourisp.com",
//     Username: "viery15102002@gmail.com",
//     Password: "21513D40BD85103F58443E0FD2FC65DAF554",
//     To: "viery15102002@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "E-Commerce DEA",
//     Body: document.getElementById("message").value,
//   }).then((message) => alert(message));
// }
