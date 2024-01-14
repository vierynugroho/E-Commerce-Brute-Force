document.getElementById("footerYear").innerText = new Date().getFullYear();
document.getElementById("footerTopYear").innerText = new Date().getFullYear();

function buy(pesanan, harga) {
  const message = `Halo Saya Mau Beli ${pesanan}, Harga ${harga} `;
  const whatsapp = `https://wa.me/62895638069206?text=${message}`;
  open(whatsapp, `_blank`);
}

const searchValue = document.querySelector("#searchProduct");

searchValue.addEventListener("keyup", cariSearch);

function cariSearch(e) {
  const searchValue = e.target.value.toLowerCase();
  const wadahProduk = document.querySelectorAll(".products");

  wadahProduk.forEach((wadah) => {
    const namaWadah = wadah.childNodes[5].textContent.toLowerCase();
    if (namaWadah.indexOf(searchValue) != -1) {
      console.log(namaWadah);
      wadah.setAttribute("style", "display:block");
    } else {
      wadah.setAttribute("style", "display:none !important");
    }
  });
}

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