/* ===== DATA SLIDE (SUMBER TUNGGAL) ===== */
const slidesData = [
  `<div class="kotak animasi-list"><h3>🚀 Tujuan Pembelajaran</h3>
    <ul>
      <li>Peserta didik dapat mengklasifikasikan benda</li>
      <li>Peserta didik dapat memahami bagaimana Kecerdasan Artifisial (KA) juga dapat melakukan pengklasifikasian seperti manusia</li>
      <li>Peserta didik dapat memahami cara KA mempelajari data untuk membuat prediksi dan mengeksplorasi model klasifikasi sederhana beserta faktor yang memengaruhinya</li>
    </ul>
  </div>`,

  `<div class="kotak animasi-list"><h3>🎯Kata Kunci</h3>
    <ul>
      <li>Klasifikasi</li>
      <li>Pola</li>
      <li>Data</li>
      <li>Prediksi</li>
      <li>Bias Data</li>
    </ul>
  </div>`,

  `<div class="kotak" style="text-align:center;"><h3>🧠 Peta Konsep</h3>
    <div style="width:100%;display:flex;align-items:center;justify-content:center;">
    <img src="../../assets/img/petakonsepbab4.png" style="max-width:100%;height:auto;border-radius:16px;margin-bottom: 25px;">
  </div></div>`,
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
  inner.innerHTML = html;

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

function toggle(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
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
update();
