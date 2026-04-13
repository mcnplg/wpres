/* ===== DATA SLIDE (SUMBER TUNGGAL) ===== */
const slidesData = [
  `<div class="kotak"><h3>Tujuan Pembelajaran</h3>
<ul>
  <li>Peserta didik memahami pengertian Kecerdasan Artifisial</li>
  <li>Peserta didik mengenal contoh penerapan KA dalam kehidupan sehari-hari</li>
  <li>Peserta didik memahami perbedaan manusia dan mesin</li>
  <li>Peserta didik mengenal cara kerja dasar Kecerdasan Artifisial</li>
</ul>
</div>`,

  `<div class="kotak"><h3>Kata Kunci</h3>
  <ul>
    <li>Kecerdasan Artifisial</li>
    <li>Data</li>
    <li>Mesin Cerdas</li>
    <li>Algoritma</li>
    <li>Pola</li>
  </ul>
</div>`,

  `<div class="kotak" style="text-align:center;"><h3>Peta Konsep</h3>
  <div style="width:100%;display:flex;align-items:center;justify-content:center;">
    <img src="https://mcnplg.github.io/wpreskka/assets/img/petakonsep.png"
         style="max-width:100%;height:auto;border-radius:16px;margin-bottom: 25px;">
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

update();
