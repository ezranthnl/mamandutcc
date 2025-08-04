const waNumber = "6285956648262";

// Data menu
const menus = [
  { name: "Brownies Roll", price: "", image: "assets/img/brownies_roll.jpg" },
  { name: "Cupcake", price: "", image: "assets/img/cupcake.jpg" },
  { name: "Korean Cake", price: "", image: "assets/img/korean_cake.jpg" },
  { name: "Nasi Ayam Bakar Kecap", price: "", image: "assets/img/nasi_ayam_bakar_kecap.jpg" }
];

const menuList = document.getElementById('menu-list');

// Modal Elements
const modal = document.getElementById('orderModal');
const modalTitle = document.getElementById('modal-title');
const qtyInput = document.getElementById('quantity-input');
const confirmBtn = document.getElementById('confirm-btn');
const closeBtn = document.querySelector('.close-btn');

let selectedMenu = null;

// Generate menu items
menus.forEach(menu => {
  const item = document.createElement('div');
  item.className = "menu-item";
  item.innerHTML = `
    <img src="${menu.image}" alt="${menu.name}">
    <h3>${menu.name}</h3>
    <p>${menu.price ? 'Rp ' + parseInt(menu.price).toLocaleString() : ''}</p>
    <button class="order-btn">Order via WA</button>
  `;

  // Event: Buka modal saat klik tombol order
  const btn = item.querySelector('.order-btn');
  btn.addEventListener('click', () => {
    selectedMenu = menu;
    modalTitle.textContent = `Mau pesan ${menu.name} berapa banyak?`;
    qtyInput.value = "";
    modal.classList.add('show'); // tampil dengan animasi
    modal.style.display = 'flex';
  });

  menuList.appendChild(item);
});

// Close Modal
closeBtn.onclick = () => closeModal();
window.onclick = (e) => { if(e.target == modal) closeModal(); }

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 200); // tunggu animasi selesai
}

// Confirm Order
confirmBtn.addEventListener('click', () => {
  const qty = qtyInput.value;
  if(qty && !isNaN(qty) && qty > 0) {
    const message = `Halo saya mau pesan ${selectedMenu.name} sebanyak ${qty} ya mandut ^^`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    closeModal();
  } else {
    alert("Masukkan jumlah yang valid ya!");
  }
});

// Animasi muncul saat scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold: 0.2 });

document.querySelectorAll('.menu-item, h2.fade-in').forEach(el => observer.observe(el));

// Sticky header shrink animation
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if(header) {
    if(window.scrollY > 50) header.classList.add('shrink');
    else header.classList.remove('shrink');
  }
});

 // Music Control
    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');

    toggleBtn.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        toggleBtn.textContent = "⏸ Pause Music";
      } else {
        music.pause();
        toggleBtn.textContent = "🎵 Play Music";
      }
    });