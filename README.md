<!DOCTYPE html>
<html lang="tr" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arda Yılmaz | Professional Barber</title>
    <style>
        :root {
            --bg-color: #0b0b0b;
            --card-bg: #161616;
            --text-color: #f0f0f0;
            --text-muted: #aaa;
            --border-color: #222;
            --header-bg: #121212;
            --accent: #d4af37;
            --accent-hover: #f3c653;
        }

        [data-theme="light"] {
            --bg-color: #f4f4f4;
            --card-bg: #ffffff;
            --text-color: #222222;
            --text-muted: #666;
            --border-color: #ddd;
            --header-bg: #ffffff;
            --accent: #b89728;
            --accent-hover: #d4af37;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; transition: background 0.3s, color 0.3s; }
        body { background-color: var(--bg-color); color: var(--text-color); line-height: 1.6; }
        
        header { 
            background: var(--header-bg); 
            padding: 15px 20px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            border-bottom: 1px solid var(--border-color); 
            position: sticky; 
            top: 0; 
            z-index: 1000; 
        }
        .logo { font-size: 20px; font-weight: bold; color: var(--accent); letter-spacing: 2px; }
        
        nav { display: flex; gap: 15px; align-items: center; }
        nav a { color: var(--text-muted); text-decoration: none; transition: 0.3s; font-size: 14px; }
        nav a:hover { color: var(--accent); }
        
        .header-controls { display: flex; gap: 10px; align-items: center; }
        .theme-btn, .lang-btn { background: none; border: 1px solid var(--border-color); color: var(--text-color); padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }
        .theme-btn:hover, .lang-btn:hover { border-color: var(--accent); color: var(--accent); }

        .menu-toggle { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
        .menu-toggle span { width: 25px; height: 3px; background: var(--accent); border-radius: 2px; }

        /* Açık / Kapalı Durum Rozeti */
        .status-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--card-bg); border: 1px solid var(--border-color); padding: 6px 14px; border-radius: 20px; font-size: 13px; margin-bottom: 15px; }
        .status-dot { width: 10px; height: 10px; border-radius: 50%; }
        .status-dot.open { background: #2ecc71; box-shadow: 0 0 8px #2ecc71; }
        .status-dot.closed { background: #e74c3c; }

        .hero { 
            height: 85vh; 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            text-align: center; 
            background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('arda1.jpg') no-repeat center center/cover; 
            padding: 0 20px; 
        }
        .hero h1 { font-size: 38px; margin-bottom: 10px; color: #fff; letter-spacing: 1px; }
        .hero .slogan { font-size: 18px; color: var(--accent); margin-bottom: 15px; font-style: italic; }
        .hero p { font-size: 14px; color: #aaa; margin-bottom: 20px; }
        
        .btn { background: var(--accent); color: #0b0b0b; padding: 12px 30px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; text-decoration: none; transition: 0.3s; display: inline-block; }
        .btn:hover { background: var(--accent-hover); }
        
        section { padding: 50px 20px; max-width: 1000px; margin: 0 auto; opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        section.visible { opacity: 1; transform: translateY(0); }
        h2 { text-align: center; font-size: 28px; margin-bottom: 30px; color: var(--accent); letter-spacing: 1px; }
        
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        .card { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center; transition: 0.3s; }
        .card:hover { border-color: var(--accent); }
        .card h3 { margin-bottom: 15px; color: var(--text-color); font-size: 18px; }
        .card p { color: var(--text-muted); font-size: 14px; }
        .price { color: var(--accent); font-size: 20px; font-weight: bold; margin-top: 15px; }
        
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        .gallery-item { width: 100%; height: 250px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); background: var(--card-bg); position: relative; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: 0.3s; }
        .gallery-item:hover img { transform: scale(1.05); }
        .insta-tag { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; display: flex; align-items: center; gap: 4px; }

        /* Quiz Kutusu */
        .quiz-box { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); max-width: 600px; margin: 0 auto; text-align: center; }
        .quiz-options { display: flex; gap: 10px; justify-content: center; margin-top: 15px; flex-wrap: wrap; }
        .quiz-btn { background: var(--bg-color); border: 1px solid var(--border-color); color: var(--text-color); padding: 10px 15px; border-radius: 4px; cursor: pointer; font-size: 13px; }
        .quiz-btn:hover { border-color: var(--accent); color: var(--accent); }
        #quizSonuc { margin-top: 15px; font-weight: bold; color: var(--accent); }

        .booking-box { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); max-width: 600px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 6px; color: var(--text-muted); font-size: 14px; }
        .form-group input, .form-group select { width: 100%; padding: 12px; background: var(--bg-color); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; outline: none; }
        .form-group input:focus, .form-group select:focus { border-color: var(--accent); }
        
        .hours-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin-top: 10px; }
        .hour-btn { background: var(--bg-color); border: 1px solid var(--border-color); color: var(--text-color); padding: 8px 5px; border-radius: 4px; cursor: pointer; text-align: center; font-size: 13px; }
        .hour-btn:hover { border-color: var(--accent); }
        .hour-btn.selected { background: var(--accent); color: #0b0b0b; font-weight: bold; }
        
        #geriSayim { margin-top: 15px; text-align: center; font-size: 14px; color: var(--accent); font-weight: bold; }

        .about-box { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center; max-width: 700px; margin: 0 auto; }
        .about-box p { color: var(--text-muted); margin-bottom: 15px; font-size: 15px; }
        
        .social-links { display: flex; justify-content: center; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
        .social-links a { color: var(--accent); text-decoration: none; border: 1px solid var(--accent); padding: 8px 14px; border-radius: 4px; font-size: 13px; transition: 0.3s; }
        .social-links a:hover { background: var(--accent); color: #0b0b0b; }
        
        /* Sabit WhatsApp Butonu */
        .float-whatsapp { position: fixed; bottom: 20px; right: 20px; background: #25d366; color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 999; text-decoration: none; transition: 0.3s; }
        .float-whatsapp:hover { transform: scale(1.1); }

        footer { text-align: center; padding: 20px; background: var(--header-bg); border-top: 1px solid var(--border-color); color: var(--text-muted); font-size: 13px; }
        footer span { color: var(--accent); }

        @media (max-width: 768px) {
            .menu-toggle { display: flex; }
            nav { display: none; position: absolute; top: 60px; left: 0; width: 100%; background: var(--header-bg); flex-direction: column; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--border-color); }
            nav.active { display: flex; }
            nav a { margin: 10px 0; font-size: 16px; }
            .hero h1 { font-size: 30px; }
            .hours-grid { grid-template-columns: repeat(3, 1fr); }
        }
    </style>
</head>
<body>

<header>
    <div class="logo">ARDA YILMAZ</div>
    <div class="header-controls">
        <button class="theme-btn" onclick="temaDegistir()" id="temaText">🌙 Koyu</button>
        <button class="lang-btn" onclick="dilDegistir()" id="langText">EN</button>
        <div class="menu-toggle" onclick="menuAcKapat()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <nav id="navMenu">
        <a href="#hizmetler" onclick="menuAcKapat()">Hizmetler</a>
        <a href="#galeri" onclick="menuAcKapat()">Galeri</a>
        <a href="#quiz" onclick="menuAcKapat()">Stil Bul</a>
        <a href="#randevu" onclick="menuAcKapat()">Randevu Al</a>
        <a href="#hakkinda" onclick="menuAcKapat()">Hakkında</a>
        <a href="#iletisim" onclick="menuAcKapat()">İletişim</a>
    </nav>
</header>

<div class="hero">
    <div class="status-badge">
        <div class="status-dot" id="calismaDurumDot"></div>
        <span id="calismaDurumText">Durum kontrol ediliyor...</span>
    </div>
    <h1>ARDA YILMAZ</h1>
    <div class="slogan" id="heroSlogan">"Tarzını Keskinleştir, Kendini Yenile!"</div>
    <p>Bursa / Osmangazi • Profesyonel Saç Kesimi & Bakım</p>
    <a href="#randevu" class="btn" id="heroBtn">Hemen Randevu Al</a>
</div>

<section id="hizmetler">
    <h2 id="secHizmet">Hizmetler & Fiyatlar</h2>
    <div class="services-grid">
        <div class="card">
            <h3 id="h1Title">Saç Kesimi</h3>
            <p id="h1Desc">Modern ve yüz tipine uygun fade/crop kesim stilleri.</p>
            <div class="price">350 TL</div>
        </div>
        <div class="card">
            <h3 id="h2Title">Sakal Şekillendirme</h3>
            <p id="h2Desc">Özenli hat çizgileri ve profesyonel bakım.</p>
            <div class="price">200 TL</div>
        </div>
        <div class="card">
            <h3 id="h3Title">Saç & Sakal Bakımı</h3>
            <p id="h3Desc">Komple bakım paketi ile kusursuz görünüm.</p>
            <div class="price">500 TL</div>
        </div>
        <div class="card">
            <h3 id="h4Title">Fön & Stil Düzenleme</h3>
            <p id="h4Desc">Günlük tarza uygun form ve şekillendirme.</p>
            <div class="price">150 TL</div>
        </div>
    </div>
</section>

<section id="galeri">
    <h2 id="secGaleri">Çalışmalarımız (Instagram Akışı)</h2>
    <div class="gallery-grid">
        <div class="gallery-item">
            <img src="arda1.jpg" alt="Arda Yılmaz Saç Tasarım 1">
            <div class="insta-tag">📸 @arda.y16</div>
        </div>
        <div class="gallery-item">
            <img src="arda2.jpg" alt="Arda Yılmaz Saç Tasarım 2">
            <div class="insta-tag">📸 @arda.y16</div>
        </div>
        <div class="gallery-item">
            <img src="arda3.jpg" alt="Arda Yılmaz Saç Tasarım 3">
            <div class="insta-tag">📸 @arda.y16</div>
        </div>
        <div class="gallery-item">
            <img src="arda4.jpg" alt="Arda Yılmaz Saç Tasarım 4">
            <div class="insta-tag">📸 @arda.y16</div>
        </div>
    </div>
</section>

<section id="quiz">
    <h2>Hangi Kesim Sana Uygun? (Mini Quiz)</h2>
    <div class="quiz-box">
        <p>Yüz tipini seç, sana en yakışan modeli söyleyelim:</p>
        <div class="quiz-options">
            <button class="quiz-btn" onclick="stilOner('oval')">Oval Yüz</button>
            <button class="quiz-btn" onclick="stilOner('kare')">Kare Yüz</button>
            <button class="quiz-btn" onclick="stilOner('yuvarlak')">Yuvarlak Yüz</button>
        </div>
        <div id="quizSonuc"></div>
    </div>
</section>

<section id="randevu">
    <h2>Randevu Oluştur</h2>
    <div class="booking-box">
        <div class="form-group">
            <label>Adınız Soyadınız</label>
            <input type="text" id="musteriAdi" placeholder="Adınızı girin">
        </div>
        <div class="form-group">
            <label>Telefon Numaranız</label>
            <input type="tel" id="musteriTel" placeholder="05XX XXX XX XX">
        </div>
        <div class="form-group">
            <label>Hizmet Seçin</label>
            <select id="hizmetSecim">
                <option value="Saç Kesimi (350 TL)">Saç Kesimi - 350 TL</option>
                <option value="Sakal Şekillendirme (200 TL)">Sakal Şekillendirme - 200 TL</option>
                <option value="Saç & Sakal Bakımı (500 TL)">Saç & Sakal Bakımı - 500 TL</option>
                <option value="Fön & Stil Düzenleme (150 TL)">Fön & Stil Düzenleme - 150 TL</option>
            </select>
        </div>
        <div class="form-group">
            <label>Gün Seçin</label>
            <input type="date" id="randevuTarihi" onchange="geriSayimBaslat()">
        </div>
        <div class="form-group">
            <label>Saat Seçin (12:00 - 21:00 Arası)</label>
            <div class="hours-grid">
                <button type="button" class="hour-btn" onclick="saatSec(this)">12:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">13:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">14:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">15:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">16:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">17:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">18:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">19:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">20:00</button>
                <button type="button" class="hour-btn" onclick="saatSec(this)">21:00</button>
            </div>
        </div>
        <div id="geriSayim"></div>
        <button type="button" class="btn" style="width: 100%; margin-top: 10px;" onclick="whatsappRandevuGonder()">WhatsApp ile Randevu İste</button>
    </div>
</section>

<section id="hakkinda">
    <h2>Kurucu & Hakkında</h2>
    <div class="about-box">
        <p><strong>Arda Yılmaz</strong> tarafından Bursa / Osmangazi bölgesinde freelance olarak kurulan ve gençlerin tarzına yön veren profesyonel bakım noktası.</p>
        <p>Bu modern web sitesinin geliştirilmesi ve dijital altyapısı <strong>Mert</strong> tarafından tasarlanmıştır.</p>
    </div>
</section>

<section id="iletisim" style="text-align: center;">
    <h2>İletişim & Sosyal Medya</h2>
    <p style="margin-bottom: 10px; color: var(--text-muted);">📍 Bursa, Osmangazi (Freelance Hizmet)</p>
    <p style="margin-bottom: 20px; color: var(--text-muted);">📞 501 296 3140</p>
    <div class="social-links">
        <a href="https://instagram.com/berber.oluyorum.arda" target="_blank">İş Instagram</a>
        <a href="https://instagram.com/arda.y16" target="_blank">Kişisel Instagram</a>
        <a href="https://tiktok.com" target="_blank">TikTok</a>
    </div>
</section>

<!-- Sabit WhatsApp Butonu -->
<a href="https://wa.me/905012963140" class="float-whatsapp" target="_blank" title="WhatsApp ile İletişime Geç">💬</a>

<footer>
    <p>&copy; 2026 Arda Yılmaz. Tüm hakları saklıdır. | Geliştirici: <span>Mert</span></p>
</footer>

<script>
    let secilenSaat = "";
    let aktifDil = "tr";

    // Hamburger Menü
    function menuAcKapat() {
        document.getElementById('navMenu').classList.toggle('active');
    }

    // Tema Değiştirici (Dark/Light)
    function temaDegistir() {
        const html = document.documentElement;
        const btnText = document.getElementById('temaText');
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            btnText.innerText = "☀️ Açık";
        } else {
            html.setAttribute('data-theme', 'dark');
            btnText.innerText = "🌙 Koyu";
        }
    }

    // Otomatik Açık/Kapalı Durumu Kontrolü
    function durumKontrol() {
        const simdi = new Date();
        const saat = simdi.getHours();
        const dot = document.getElementById('calismaDurumDot');
        const text = document.getElementById('calismaDurumText');

        // 12:00 ile 21:00 arası açık kabul edelim
        if (saat >= 12 && saat < 21) {
            dot.className = "status-dot open";
            text.innerText = aktifDil === 'tr' ? "Şu an Açık 🟢 - Randevu Alabilirsiniz" : "Currently Open 🟢 - Book Now";
        } else {
            dot.className = "status-dot closed";
            text.innerText = aktifDil === 'tr' ? "Şu an Kapalı 🔴 - Yarın İçin Randevu Bırakabilirsiniz" : "Currently Closed 🔴";
        }
    }
    durumKontrol();

    // Dil Değiştirici (TR / EN)
    function dilDegistir() {
        aktifDil = aktifDil === 'tr' ? 'en' : 'tr';
        document.getElementById('langText').innerText = aktifDil === 'tr' ? 'EN' : 'TR';
        durumKontrol();
        
        if(aktifDil === 'en') {
            document.getElementById('heroSlogan').innerText = '"Sharpen Your Style, Renew Yourself!"';
            document.getElementById('heroBtn').innerText = 'Book Now';
            document.getElementById('secHizmet').innerText = 'Services & Prices';
            document.getElementById('secGaleri').innerText = 'Our Work (Instagram Feed)';
        } else {
            document.getElementById('heroSlogan').innerText = '"Tarzını Keskinleştir, Kendini Yenile!"';
            document.getElementById('heroBtn').innerText = 'Hemen Randevu Al';
            document.getElementById('secHizmet').innerText = 'Hizmetler & Fiyatlar';
            document.getElementById('secGaleri').innerText = 'Çalışmalarımız (Instagram Akışı)';
        }
    }

    // Yüz Tipine Göre Saç Quiz'i
    function stilOner(yuzTipi) {
        const sonucDiv = document.getElementById('quizSonuc');
        if(yuzTipi === 'oval') {
            sonucDiv.innerText = "✨ Sana En Uygun Stil: Crop Kesim veya Dağınık Modern Tarz!";
        } else if(yuzTipi === 'kare') {
            sonucDiv.innerText = "✨ Sana En Uygun Stil: Keskin Hatlı Fade Kesim ve Yanları Kısa Model!";
        } else if(yuzTipi === 'yuvarlak') {
            sonucDiv.innerText = "✨ Sana En Uygun Stil: Üst kısımları hacimli, yanları sıfır (Mid Fade) kesim!";
        }
    }

    // Saat Seçimi
    function saatSec(element) {
        document.querySelectorAll('.hour-btn').forEach(btn => btn.classList.remove('selected'));
        element.classList.add('selected');
        secilenSaat = element.innerText;
        geriSayimBaslat();
    }

    // Randevu Geri Sayım Sayacı
    function geriSayimBaslat() {
        const tarihInput = document.getElementById('randevuTarihi').value;
        if(!tarihInput || !secilenSaat) return;

        const hedefZaman = new Date(`${tarihInput}T${secilenSaat}:00`).getTime();
        
        const timer = setInterval(() => {
            const simdi = new Date().getTime();
            const fark = hedefZaman - simdi;

            if (fark < 0) {
                clearInterval(timer);
                document.getElementById('geriSayim').innerText = "Seçilen randevu vakti geldi veya geçti!";
                return;
            }

            const saatKaldi = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const gunKaldi = Math.floor(fark / (1000 * 60 * 60 * 24));

            document.getElementById('geriSayim').innerText = `⏳ Randevunuza ${gunKaldi} gün ${saatKaldi} saat kaldı.`;
        }, 1000);
    }

    // Scroll Animasyonu (Fade-in)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // WhatsApp Randevu Gönderim
    function whatsappRandevuGonder() {
        const ad = document.getElementById('musteriAdi').value;
        const tel = document.getElementById('musteriTel').value;
        const hizmet = document.getElementById('hizmetSecim').value;
        const tarih = document.getElementById('randevuTarihi').value;

        if (!ad || !tel || !tarih || !secilenSaat) {
            alert("Lütfen adınızı, telefonunuzu, tarihi ve saati eksiksiz seçin!");
            return;
        }

        const mesaj = `Merhaba Arda, randevu almak istiyorum.%0A%0A*Ad Soyad:* ${ad}%0A*Telefon:* ${tel}%0A*Hizmet:* ${hizmet}%0A*Tarih:* ${tarih}%0A*Saat:* ${secilenSaat}`;
        const telefon = "905012963140";
        
        window.open(`https://wa.me/${telefon}?text=${mesaj}`, '_blank');
    }
</script>
</body>
</html><img width="921" height="2048" alt="arda2 jpg" src="https://github.com/user-attachments/assets/0be7144c-6c05-4dd8-a31c-c94f8a504b04" />
<img width="921" height="2048" alt="arda1 jpg" src="https://github.com/user-attachments/assets/ebeeecac-de1d-4b99-85ab-eb30b11de854" />
<img width="921" height="2048" alt="arda4 jpg" src="https://github.com/user-attachments/assets/93f4c023-060e-4eed-bc3d-53f5fefe2f2f" />
<img width="921" height="2048" alt="arda3 jpg" src="https://github.com/user-attachments/assets/9f3ee9f2-ba8d-4ed0-8d1e-923f3f9661fd" />
