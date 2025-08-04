const menuForm = document.getElementById('menu-form');
const menuList = document.getElementById('menu-list');

menuForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const [nameInput, priceInput, fileInput, descInput] = menuForm.elements;
  const file = fileInput.files[0];

  if (!file) {
    alert("Pilih gambar terlebih dahulu!");
    return;
  }

  // Baca gambar pake FileReader
  const reader = new FileReader();
  reader.onload = function(event) {
    const menuItem = document.createElement('div');
    menuItem.className = "menu-item fade-in";
    menuItem.innerHTML = `
      <img src="${event.target.result}" alt="${nameInput.value}">
      <h3>${nameInput.value}</h3>
      <p>Rp ${parseInt(priceInput.value).toLocaleString()}</p>
      <p style="font-size:12px;color:#999;">${descInput.value}</p>
    `;
    
    // Masukin ke preview
    menuList.appendChild(menuItem);

    // Reset form
    menuForm.reset();
  };

  reader.readAsDataURL(file);
});
