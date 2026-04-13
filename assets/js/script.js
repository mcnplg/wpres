const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("collapsed");
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}

const contentData = {
  home: `
            <div style="text-align:center; padding:20px;">
              <h2 style="color:#ff6600; font-size:30px; text-shadow:1px 1px #fff;">Modul Ajar Interaktif</h2>
              <h3 style="margin-top:5px; font-size:25px; color:#333;">Mata Pelajaran: Koding dan Kecerdasan Artifisial (KKA)</h3>
              <div style="margin:20px auto; width:400px; height:400px; border-radius:50%; overflow:hidden; box-shadow:0 0 15px rgba(0,0,0,0.3);">
                  <img src="assets/img/fotopr.jpg" alt="Foto Guru" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <p style="font-size:25px; font-weight:bold; color:#333;">Muchsin, S.Si</p>
              <div style="margin-top:10px; background:#fff3e0; display:inline-block; padding:15px 25px; border-radius:15px; box-shadow:0 2px 8px rgba(0,0,0,0.2);">
                  <p style="margin:5px 0; font-size:20px;"><strong>Sekolah:</strong> SD Negeri 75 Palembang</p>
                  <p style="margin:5px 0; font-size:20px;"><strong>Tahun Ajaran:</strong> 2025 / 2026</p>
              </div>
              <div style="margin-top:25px;">
                  <p style="font-size:20px; color:#444; line-height:1.6;">
                    Selamat datang di <b>Modul Ajar Interaktif</b>!<br>
                    Mari belajar dengan cara yang menyenangkan melalui video, kuis, dan kegiatan kelompok.
                  </p>
              </div>
            </div>`,

  tpbab3: `<iframe src="pages/materi/tpbab3.html" width="100%" height="100%" frameborder="0"></iframe>`,
  tpbab4: `<iframe src="pages/materi/tpbab4.html" width="100%" height="100%" frameborder="0"></iframe>`,

  videokka: `<h2 style="text-align: center; color:blue;">Topik A: Energi di Sekitar Kita</h2>
             <iframe src="materividio1.html" width="100%" height="100%"; frameborder="0"></iframe>`,

  slidematerikkabab3: `<iframe src="pages/materi/slidekkabab3.html" width="100%" height="100%" frameborder="0"></iframe>`,
  slidematerikkabab4: `<iframe src="pages/materi/slidekkabab4.html" width="100%" height="100%" frameborder="0"></iframe>`,

  bukukka: `<iframe src="assets/pdf/bukukka.pdf" width="100%" height="100%" frameborder="0"></iframe>`,

  quiz: `<iframe src="pages/quiz.html" width="100%" height="100%" frameborder="0"></iframe>`,

  lkpdKelompok: `<iframe src="lkpdkelompok.html" width="100%" height="100%" frameborder="0"></iframe>`,

  lkpdIndividu: `<iframe src="lkpdmandiri.html" width="100%" height="100%" frameborder="0"></iframe>`,

  kesimpulan: `<iframe src="pages/kesimpulan.html" width="100%" height="100%" frameborder="0"></iframe>`,

  penutup: `<h2>Penutup</h2>
              <p>Terima kasih sudah belajar! Sampai jumpa di pembelajaran berikutnya 😊</p>`,
};

function showContent(menu) {
  const contentArea = document.getElementById("contentArea");
  contentArea.classList.remove("fade-in");
  void contentArea.offsetWidth;
  contentArea.innerHTML = contentData[menu];
  contentArea.classList.add("fade-in");
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// Tampilkan halaman Home saat pertama kali web dibuka
window.onload = function () {
  showContent("home");
};
