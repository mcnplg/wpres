/* ===== DATA SLIDE (SUMBER TUNGGAL) ===== */
const slidesData = [
  `<div class="kotak"><h1>BAB 4 :</h1><h2>Belajar Bersama Kecerdasan Artifisial : Si Cerdas yang Terus Belajar</h2><p><b>A. Klasifikasi dalam Kehidupan Sehari-Hari</b></p></div>`,

  `<div class="kotak"><h3>🧠 Pengertian Klasifikasi</h3>
    <p>Klasifikasi adalah kegiatan mengelompokkan benda atau sesuatu berdasarkan ciri tertentu.</p>
  </div>`,

  `<div class="kotak animasi-list">
    <div style="display:flex; align-items:center; gap:20px;">
      <!-- KIRI -->
      <div style= "padding-top:0; width:30%;">
        <h3>🎯 Tujuan Klasifikasi</h3>
        <ul>
          <li>Mempermudah memahami sesuatu</li>
          <li>Mempermudah mencari barang</li>
          <li>Membantu mengatur benda agar rapi</li>
          <li>Memudahkan penyelesaian masalah</li>
        </ul>
      </div>
      <!-- KANAN -->
      <div style="flex:1; display:flex; justify-content:center; width: 70%;">
        <img src="../../assets/img/tujklas.png"
         style="max-width:100%; height:auto; border-radius:16px;">
      </div>
    </div>
  </div>`,

  `<div class="kotak animasi-list">
    <div style="display:flex; align-items:center; gap:20px;">
      <!-- KIRI -->
      <div style= "padding-top:0; width:30%;">
        <h3>🎯 Penerapan Klasifikasi dalam Kehidupan Sehari-hari</h3>
        <ul>
          <li>Buah dikelompokkan berdasarkan warnanya</li>
          <li>Hewan dikelompokkan berdasarkan tempat hidupnya</li>
          <li>Alat tulis dikelompokkan berdasarkan fungsinya</li>
          <li>Buku dikelompokkan berdasarkan jenisnya</li>
        </ul>
      </div>
      <!-- KANAN -->
      <div style="flex:1; display:flex; justify-content:center; width: 70%;">
        <img src="../../assets/img/conklas.png"
         style="max-width:100%; height:auto; border-radius:16px;">
      </div>
    </div>
  </div>`,

  `<div class="kotak animasi-list">
    <div style="display:flex; align-items:center; gap:20px;">
      <!-- KIRI -->
      <div style= "padding-top:0; width:30%;">
        <h3>🚀 Dasar atau Kriteria Klasifikasi</h3>
        <ul>
          <li>Warna</li>
          <li>Bentuk</li>
          <li>Ukuran</li>
          <li>Fungsi</li>
          <li>Jenis</li>
        </ul>
      </div>
      <!-- KANAN -->
      <div style="flex:1; display:flex; justify-content:center; width: 70%;">
        <img src="../../assets/img/dasklas.png"
         style="max-width:100%; height:auto; border-radius:16px;">
      </div>
    </div>
  </div>`,

  `<div class="kotak">
    <h3>🤖 Contoh Klasifikasi</h3>
    <p>Klasifikasi bisa dilakukan tergantung kebutuhan dan tujuan. Misalnya, buah-buahan ini 🍎 🍌 🍊 🍓 🥭 🍉 🍋 🍒 🍍 🍇 bisa dikasifikasikan berdasarkan "rasa", "bentuk", dan "warna". Tergantung apa yang kita inginkan</p>
    <button onclick="toggle(this)">Contoh Klasifikasi</button>
    <div class="hidden">
      <button onclick="mulaiAI(this)" style="display:block; margin:0 auto; background-color: #4CAF50; margin-top: 20px;">Dasar Klasifikasi</button>
      <div>
        <canvas class="ai-canvas" width="900" height="420"></canvas>
      </div>
    </div>
  </div>`,

  `<div class="kotak animasi-list">
    <div style="display:flex; align-items:center; gap:20px;">
      <!-- KIRI -->
      <div style= "padding-top:0; width:30%;">
        <h3>✨ Langkah-Langkah Klasifikasi</h3>
        <ul>
          <li>Mengamati benda</li>
          <li>Menentukan ciri-ciri</li>
          <li>Menentukan kriteria</li>
          <li>Mengelompokkan benda</li>
        </ul>
      </div>
      <!-- KANAN -->
      <div style="flex:1; display:flex; justify-content:center; width: 70%;">
        <img src="../../assets/img/langklas.png"
         style="max-width:100%; height:auto; border-radius:16px;">
      </div>
    </div>
  </div>`,

  `<div class="kotak animasi-list">
    <div style="display:flex; align-items:center; gap:20px;">
      <!-- KIRI -->
      <div style= "padding-top:0; width:30%;">
        <h3>🎨 Manfaat Klasifikasi</h3>
        <ul>
          <li>Membuat pekerjaan lebih cepat</li>
          <li>Mengurangi kebingungan</li>
          <li>Membantu berpikir lebih teratur</li>
          <li>Digunakan dalam kehidupan sehari-hari dan teknologi</li>
        </ul>
      </div>
      <!-- KANAN -->
      <div style="flex:1; display:flex; justify-content:center; width: 70%;">
        <img src="../../assets/img/manklas.png"
         style="max-width:100%; height:auto; border-radius:16px;">
      </div>
    </div>
  </div>`,

  `<div class="kotak"><h3>🎯 Kesimpulan</h3>
    <p>Klasifikasi adalah cara mengelompokkan sesuatu berdasarkan ciri tertentu agar lebih mudah dipahami, dicari, dan digunakan dalam kehidupan sehari-hari.</p>
  </div>`,
];

const slidesContainer = document.getElementById("slides");
const sidebar = document.getElementById("sidebar");
let index = 0;

/* ===== RENDER SLIDES ===== */
slidesData.forEach((html, i) => {
  // main slide
  const slide = document.createElement("section");
  slide.className = "slide";
  slide.innerHTML = html;
  slidesContainer.appendChild(slide);

  // sidebar preview
  const preview = document.createElement("div");
  preview.className = "preview";
  preview.onclick = () => goTo(i);

  const inner = document.createElement("div");
  inner.className = "preview-inner";
  inner.innerHTML = html.replace(/<canvas[\s\S]*?<\/canvas>/g, "");

  preview.appendChild(inner);
  sidebar.appendChild(preview);
});

const slides = document.querySelectorAll(".slide");
const previews = document.querySelectorAll(".preview");

function update() {
  slides.forEach((s) => s.classList.remove("active"));
  previews.forEach((p) => p.classList.remove("active"));
  slides[index].classList.add("active");
  previews[index].classList.add("active");

  // 🔥 jalankan animasi otomatis
  animasiList(slides[index]);
}

function update() {
  slides.forEach((s) => s.classList.remove("active"));
  previews.forEach((p) => p.classList.remove("active"));

  slides[index].classList.add("active");
  previews[index].classList.add("active");

  // 🔥 jalankan animasi otomatis
  animasiList(slides[index]);
}

function next() {
  if (index < slides.length - 1) {
    index++;
    update();
  }
}
function prev() {
  if (index > 0) {
    index--;
    update();
  }
}
function goTo(i) {
  index = i;
  update();
}

function toggleSidebar() {
  document.body.classList.toggle("fullscreen");
}

function toggle(btn) {
  const el = btn.nextElementSibling;
  if (!el) return;
  el.classList.toggle("hidden");

  const canvas = el.querySelector(".ai-canvas");
  if (canvas && !canvas.dataset.run) {
    startAIAnimation(canvas);
    canvas.dataset.run = "1";
  }
}

/*tambahan animasi*/
function animasiList(slide) {
  const items = slide.querySelectorAll(".animasi-list li");

  items.forEach((li, i) => {
    li.classList.remove("muncul"); // reset dulu

    setTimeout(() => {
      li.classList.add("muncul");
    }, i * 300);
  });
}

/* ===== GAME KLASIFIKASI ===== */
const buahList = [
  { icon: "🍎", warna: "merah", rasa: "manis", bentuk: "bulat" },
  { icon: "🍌", warna: "kuning", rasa: "manis", bentuk: "oval" },
  { icon: "🍊", warna: "kuning", rasa: "masam", bentuk: "bulat" },
  { icon: "🍓", warna: "merah", rasa: "masam", bentuk: "oval" },
  { icon: "🥭", warna: "kuning", rasa: "manis", bentuk: "oval" },
  { icon: "🍉", warna: "merah", rasa: "manis", bentuk: "bulat" },
  { icon: "🍋", warna: "kuning", rasa: "masam", bentuk: "oval" },
  { icon: "🍒", warna: "merah", rasa: "manis", bentuk: "bulat" },
  { icon: "🍍", warna: "kuning", rasa: "masam", bentuk: "oval" },
  { icon: "🍇", warna: "merah", rasa: "manis", bentuk: "bulat" },
];

let canvas, ctx;
let buahCanvas = [];
let dragging = null,
  offsetX = 0,
  offsetY = 0;

let jenis = "warna";
let k1 = "merah";
let k2 = "kuning";
let skor = 0;
let mode = "menu";

/* MENU UI */
const pilihanList = [
  { label: "warna", x: 300, y: 120 },
  { label: "rasa", x: 300, y: 170 },
  { label: "bentuk", x: 300, y: 220 },
];

const tombolMulai = { x: 350, y: 280, w: 200, h: 50 };

function mulaiAI(btn) {
  const box = btn.nextElementSibling;
  box.style.display = "block";

  canvas = box.querySelector(".ai-canvas");
  ctx = canvas.getContext("2d");

  mode = "menu";
  gambar();

  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", drag);
  canvas.addEventListener("mouseup", endDrag);
}

function updateKriteria() {
  if (jenis === "warna") {
    k1 = "merah";
    k2 = "kuning";
  } else if (jenis === "rasa") {
    k1 = "manis";
    k2 = "masam";
  } else {
    k1 = "bulat";
    k2 = "oval";
  }
}

/* ✅ POSISI BUAH SUDAH CENTER */
function setupGame() {
  skor = 0;
  buahCanvas = [];

  const cols = 5;
  const spacing = 70;
  const startY = 80;

  // hitung agar posisi horizontal center
  const totalWidth = (cols - 1) * spacing;
  const startX = canvas.width / 2 - totalWidth / 2;

  buahList.forEach((b, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);

    buahCanvas.push({
      ...b,
      x: startX + col * spacing,
      y: startY + row * spacing,
    });
  });

  gambar();
}

function gambar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mode === "menu") {
    ctx.font = "24px Arial";
    ctx.fillText("Pilih Jenis Klasifikasi", 300, 80);

    pilihanList.forEach((p) => {
      ctx.strokeRect(p.x, p.y, 20, 20);
      if (jenis === p.label) {
        ctx.fillText("✔", p.x + 2, p.y + 18);
      }
      ctx.fillText(p.label, p.x + 30, p.y + 18);
    });

    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(tombolMulai.x, tombolMulai.y, tombolMulai.w, tombolMulai.h);

    ctx.fillStyle = "#fff";
    ctx.fillText("Mulai Game", tombolMulai.x + 25, tombolMulai.y + 32);

    return;
  }

  ctx.fillStyle = "#000";
  ctx.font = "18px Arial";
  ctx.fillText("Drag buah ke kotak yang benar!", 300, 30);
  ctx.fillText("Skor: " + skor, 750, 30);

  drawBox(200, 250, k1);
  drawBox(600, 250, k2);

  /* ✅ emoji benar-benar center */
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  buahCanvas.forEach((b) => {
    ctx.font = "40px Arial";
    ctx.fillText(b.icon, b.x, b.y);
  });

  // reset biar teks lain normal
  ctx.textAlign = "start";
  ctx.textBaseline = "alphabetic";
}

function drawBox(x, y, label) {
  ctx.strokeRect(x, y, 120, 120);
  ctx.fillText(label, x + 20, y - 10);
}

/* HANDLE INPUT */
function handleMouseDown(e) {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  if (mode === "menu") {
    pilihanList.forEach((p) => {
      if (mx > p.x && mx < p.x + 20 && my > p.y && my < p.y + 20) {
        jenis = p.label;
      }
    });

    if (
      mx > tombolMulai.x &&
      mx < tombolMulai.x + tombolMulai.w &&
      my > tombolMulai.y &&
      my < tombolMulai.y + tombolMulai.h
    ) {
      mode = "game";
      updateKriteria();
      setupGame();
    }

    gambar();
    return;
  }

  buahCanvas.forEach((b) => {
    if (mx > b.x - 20 && mx < b.x + 20 && my > b.y - 20 && my < b.y + 20) {
      dragging = b;
      offsetX = mx - b.x;
      offsetY = my - b.y;
    }
  });
}

function drag(e) {
  if (!dragging) return;

  const rect = canvas.getBoundingClientRect();
  dragging.x = e.clientX - rect.left - offsetX;
  dragging.y = e.clientY - rect.top - offsetY;

  gambar();
}

function endDrag(e) {
  if (!dragging) return;

  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  if (inBox(mx, my, 200, 250)) {
    cekJawaban(dragging, k1, 200, 250);
  } else if (inBox(mx, my, 600, 250)) {
    cekJawaban(dragging, k2, 600, 250);
  }

  dragging = null;
}

function inBox(mx, my, x, y) {
  return mx > x && mx < x + 120 && my > y && my < y + 120;
}

function cekJawaban(buah, target, tx, ty) {
  if (buah[jenis] === target) {
    buah.x = tx + 60;
    buah.y = ty + 60;
    skor++;
  } else {
    alert("❌ Salah!");
  }
  gambar();
}
update();
