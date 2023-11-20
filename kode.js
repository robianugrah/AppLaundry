// kode.js
const namaInput = document.getElementById('nama');
const jenisLaundryInput = document.getElementById('jenisLaundry');
const tanggalInput = document.getElementById('tanggal');
const daftarPesanan = document.getElementById('daftarPesanan');

let pesananList = [];

function renderPesanan() {
  daftarPesanan.innerHTML = '';
  pesananList.forEach((pesanan, index) => {
    const pesananBaru = document.createElement('li');
    pesananBaru.innerHTML = `<strong>${pesanan.nama}</strong> - ${pesanan.jenisLaundry}, ${pesanan.tanggal} 
      <button onclick="editPesanan(${index})">Edit</button>
      <button onclick="hapusPesanan(${index})">Hapus</button>`;
    daftarPesanan.appendChild(pesananBaru);
  });
}

function tambahPesanan() {
  const nama = namaInput.value;
  const jenisLaundry = jenisLaundryInput.value;
  const tanggal = tanggalInput.value;

  if (nama && jenisLaundry && tanggal) {
    const pesananBaru = { nama, jenisLaundry, tanggal };
    pesananList.push(pesananBaru);
    renderPesanan();

    // Reset input fields
    namaInput.value = '';
    jenisLaundryInput.value = 'cuci';
    tanggalInput.value = '';
  } else {
    alert('Harap isi semua kolom!');
  }
}

function editPesanan(index) {
  const pesanan = pesananList[index];

  // Set input fields with existing data for editing
  namaInput.value = pesanan.nama;
  jenisLaundryInput.value = pesanan.jenisLaundry;
  tanggalInput.value = pesanan.tanggal;

  // Remove the edited item from the list
  pesananList.splice(index, 1);

  // Render the updated list
  renderPesanan();
}

function hapusPesanan(index) {
  // Remove the item from the list
  pesananList.splice(index, 1);

  // Render the updated list
  renderPesanan();
}

// Menggunakan Service Worker untuk membuat PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
