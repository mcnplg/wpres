/* ===== DATA SLIDE (SUMBER TUNGGAL) ===== */
const slidesData = [
  `<div class="kotak"><h1>BAB 3</h1><h2>Kecerdasan Artifisial</h2><p>Teman Baru di Dunia Digital</p></div>`,

  `<div class="kotak"><h3>Pengantar</h3>
          <p>
            Pernahkah kamu menggunakan Google, YouTube, atau media sosial?
            Pernah terpikir, bagaimana aplikasi tersebut tahu video, gambar,
            atau informasi yang kamu sukai?
          </p>
          <p>Jawabannya adalah <b>Kecerdasan Artifisial (KA)</b>.</p>
        </div>`,

  `<div class="kotak"><h3>Apa Itu Kecerdasan Artifisial?</h3>
          <p>
            Kecerdasan Artifisial (KA) adalah kemampuan komputer atau mesin
            untuk meniru cara berpikir manusia, seperti mengenali gambar,
            suara, pola, dan mengambil keputusan.
          </p>
          <button onclick="toggle(this)">Contoh KA di Sekitar Kita</button>
            <div class="hidden">
              <ul>
                <li>Rekomendasi video YouTube</li>
                <li>Pengenalan wajah</li>
                <li>Asisten suara</li>
                <li>Filter kamera</li>
              </ul>
            </div>
        </div>`,

  `<div class="kotak"><h3>Bagaimana Kecerdasan Artifisial Bekerja?</h3>
          <p>
            KA bekerja dengan <b>data</b>. Semakin banyak data yang diberikan,
            semakin baik hasil yang dihasilkan.
          </p>
          <ol>
            <li>Mengumpulkan data</li>
            <li>Mengenali pola</li>
            <li>Membuat keputusan</li>
          </ol>
          <button onclick="toggle(this)">Mengapa Data Penting?</button>
          <div class="hidden">
            <p>
              Tanpa data, KA tidak bisa belajar. Data membantu mesin
              mengenali perbedaan dan membuat keputusan yang tepat.
            </p>
          </div>
        </div>`,

  /* ===== SLIDE ANIMASI ===== */
  `<div class="kotak"><h3>🤖 AI Belajar (Neural Network)</h3>
          <p style="text-align:center">Data → Proses (Neuron) → Output → Akurasi</p>
          <button onclick="toggle(this)">Mulai Animasi</button>
          <div class="hidden">
            <canvas class="ai-canvas" width="900" height="420"></canvas>
          </div>
        </div>`,

  `<div class="kotak"><h3>Manusia vs Komputer</h3>
          <table border="1" cellpadding="12" style="border-collapse:collapse; width:100%; text-align:center">
            <tr style="background:#bbdefb">
              <th>Manusia</th>
              <th>Komputer</th>
            </tr>
            <tr>
              <td>Memiliki perasaan</td>
              <td>Tidak memiliki perasaan</td>
            </tr>
            <tr>
              <td>Bisa berpikir sendiri</td>
              <td>Bergantung pada data</td>
            </tr>
            <tr>
              <td>Menggunakan pancaindra</td>
              <td>Menggunakan sensor</td>
            </tr>
          </table>
        </div>`,

  `<div class="kotak"><h3>Mesin Cerdas & Mesin Non-Cerdas</h3>
          <p>
            Mesin cerdas dapat belajar dari data, sedangkan mesin non-cerdas
            hanya bekerja sesuai perintah tetap.
          </p>
          <button onclick="toggle(this)">Lihat Contoh</button>
          <div class="hidden">
            <p><b>Mesin Cerdas:</b> Kamera pengenal wajah, robot AI</p>
            <p><b>Mesin Non-Cerdas:</b> Kipas angin, lampu</p>
          </div>
        </div>`,

  `<div class="kotak"><h3>Ayo Renungkan</h3><p>KA membantu manusia, tetapi manusia tetap paling hebat.</p></div>`,
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

/* ===== ANIMASI AI (SLIDE 3) ===== */
function startAIAnimation(canvas) {
  const ctx = canvas.getContext("2d");

  // ✅ INI TEMPAT MENGATUR UKURAN CANVAS
  const padding = 10;
  const contentWidth = 900;
  const contentHeight = 360;

  canvas.width = contentWidth + padding * 2;
  canvas.height = contentHeight + padding * 2;

  ctx.translate(padding, padding);

  let neurons = [],
    dataX = 60,
    visible = true,
    output = false,
    accuracy = 60;

  function reset() {
    dataX = 60;
    visible = true;
    output = false;
    neurons = [];
    for (let i = 0; i < 14; i++) {
      neurons.push({
        x: 400 + Math.random() * 100,
        y: 100 + Math.random() * 120,
        active: false,
      });
    }
  }
  reset();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.font = "14px Arial";
    ctx.fillText("DATA", 60, 50);
    ctx.fillText("NEURAL NETWORK", 400, 50);
    ctx.fillText("OUTPUT", 760, 50);

    if (visible) {
      ctx.font = "40px Arial";
      ctx.fillText("🐟", dataX, 160);
      dataX += 3;
      if (dataX > 360) {
        visible = false;
        neurons.forEach((n) => (n.active = true));
        setTimeout(() => {
          output = true;
          accuracy = Math.min(accuracy + 5, 95);
        }, 1200);
      }
    }

    neurons.forEach((a) => {
      neurons.forEach((b) => {
        ctx.strokeStyle = "rgba(56,189,248,.2)";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });
    });

    neurons.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = n.active ? "#38bdf8" : "#1e293b";
      ctx.fill();
    });

    if (output) {
      ctx.font = "40px Arial";
      ctx.fillText("🐟", 760, 160);
    }

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(360, 320, 200, 16);
    ctx.fillStyle = "#22c55e";
    ctx.fillRect(360, 320, (accuracy / 100) * 200, 16);
    ctx.fillStyle = "blue";
    ctx.fillText(`Akurasi ${accuracy}%`, 420, 310);

    requestAnimationFrame(draw);
  }

  setInterval(reset, 4200);
  draw();
}

update();
