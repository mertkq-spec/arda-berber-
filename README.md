<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arda Yılmaz | Professional Barber</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background-color: #0b0b0b;
            color: #f0f0f0;
            line-height: 1.6;
        }
        header {
            background: #121212;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #222;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        .logo {
            font-size: 22px;
            font-weight: bold;
            color: #d4af37;
            letter-spacing: 2px;
        }
        nav a {
            color: #ccc;
            text-decoration: none;
            margin-left: 20px;
            transition: 0.3s;
            font-size: 14px;
        }
        nav a:hover {
            color: #d4af37;
        }
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
        .hero h1 {
            font-size: 46px;
            margin-bottom: 10px;
            color: #fff;
            letter-spacing: 1px;
        }
        .hero .slogan {
            font-size: 20px;
            color: #d4af37;
            margin-bottom: 15px;
            font-style: italic;
        }
        .hero p {
            font-size: 16px;
            color: #aaa;
            margin-bottom: 30px;
        }
        .btn {
            background: #d4af37;
            color: #0b0b0b;
            padding: 12px 30px;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            transition: 0.3s;
            display: inline-block;
        }
        .btn:hover {
            background: #f3c653;
        }
        section {
            padding: 60px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }
        h2 {
            text-align: center;
            font-size: 32px;
            margin-bottom: 40px;
            color: #d4af37;
            letter-spacing: 1px;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }
        .card {
            background: #161616;
            padding: 25px;
            border-radius: 8px;
            border: 1px solid #222;
            text-align: center;
            transition: 0.3s;
        }
        .card:hover {
            border-color: #d4af37;
        }
        .card h3 {
            margin-bottom: 15px;
            color: #fff;
            font-size: 18px;
        }
        .price {
            color: #d4af37;
            font-size: 20px;
            font-weight: bold;
            margin-top: 15px;
        }
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }
        .gallery-item {
            height: 280px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #222;
            background: #161616;
        }
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s;
        }
        .gallery-item img:hover {
            transform: scale(1.05);
        }
        .booking-box {
            background: #161616;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid #222;
            max-width: 600px;
            margin: 0 auto;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #ccc;
            font-size: 14px;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            background: #0b0b0b;
            border: 1px solid #333;
            color: #fff;
            border-radius: 4px;
            outline: none;
        }
        .form-group input:focus, .form-group select:focus {
            border-color: #d4af37;
        }
        .hours-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 10px;
        }
        .hour-btn {
            background: #0b0b0b;
            border: 1px solid #333;
            color: #fff;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            font-size: 14px;
            transition: 0.3s;
        }
        .hour-btn:hover {
            border-color: #d4af37;
        }
        .hour-btn.selected {
            background: #d4af37;
            color: #0b0b0b;
            font-weight: bold;
        }
        .about-box {
            background: #161616;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid #222;
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
        }
        .about-box p {
            color: #bbb;
            margin-bottom: 15px;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        .social-links a {
            color: #d4af37;
            text-decoration: none;
            border: 1px solid #d4af37;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            transition: 0.3s;
        }
        .social-links a:hover {
            background: #d4af37;
            color: #0b0b0b;
        }
        footer {
            text-align: center;
            padding: 30px;
            background: #121212;
            border-top: 1px solid #222;
            color: #666;
            font-size: 13px;
        }
        footer span {
            color: #d4af37;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">ARDA YILMAZ</div>
        <nav>
            <a href="#hizmetler">Hizmetler</a>
            <a href="#galeri">Galeri</a>
            <a href="#randevu">Randevu Al</a>
            <a href="#hakkinda">Hakkında</a>
            <a href="#iletisim">İletişim</a>
        </nav>
    </header>

    <div class="hero">
        <h1>ARDA YILMAZ</h1>
        <div class="slogan">"Tarzını Keskinleştir, Kendini Yenile!"</div>
        <p>Bursa / Osmangazi • Profesyonel Saç Kesimi & Bakım</p>
        <a href="#randevu" class="btn">Hemen Randevu Al</a>
    </div>

    <section id="hizmetler">
        <h2>Hizmetler & Fiyatlar</h2>
        <div class="services-grid">
            <div class="card">
                <h3>Saç Kesimi</h3>
                <p>Modern ve yüz tipine uygun fade/crop kesim stilleri.</p>
                <div class="price">350 TL</div>
            </div>
            <div class="card">
                <h3>Sakal Şekillendirme</h3>
                <p>Özenli hat çizgileri ve profesyonel bakım.</p>
                <div class="price">200 TL</div>
            </div>
            <div class="card">
                <h3>Saç & Sakal Bakımı</h3>
                <p>Komple bakım paketi ile kusursuz görünüm.</p>
                <div class="price">500 TL</div>
            </div>
            <div class="card">
                <h3>Fön & Stil Düzenleme</h3>
                <p>Günlük tarza uygun form ve şekillendirme.</p>
                <div class="price">150 TL</div>
            </div>
        </div>
    </section>

    <section id="galeri">
        <h2>Çalışmalarımız</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="arda1.jpg" alt="Arda Yılmaz Saç Tasarım 1">
            </div>
            <div class="gallery-item">
                <img src="arda2.jpg" alt="Arda Yılmaz Saç Tasarım 2">
            </div>
            <div class="gallery-item">
                <img src="arda3.jpg" alt="Arda Yılmaz Saç Tasarım 3">
            </div>
            <div class="gallery-item">
                <img src="arda4.jpg" alt="Arda Yılmaz Saç Tasarım 4">
            </div>
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
                <input type="date" id="randevuTarihi">
            </div>
            <div class="form-group">
                <label>Saat Seçin (12:00 - 21:00 Arası)</label>
                <div class="hours-grid">
                    <button class="hour-btn" onclick="saatSec(this)">12:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">13:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">14:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">15:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">16:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">17:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">18:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">19:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">20:00</button>
                    <button class="hour-btn" onclick="saatSec(this)">21:00</button>
                </div>
            </div>
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
        <p style="margin-bottom: 10px; color: #aaa;">📍 Bursa, Osmangazi (Freelance Hizmet)</p>
        <p style="margin-bottom: 20px; color: #aaa;">📞 501 296 3140</p>
        <div class="social-links">
            <a href="https://instagram.com/berber.oluyorum.arda" target="_blank">İş Instagram</a>
            <a href="https://instagram.com/arda.y16" target="_blank">Kişisel Instagram</a>
            <a href="https://tiktok.com" target="_blank">TikTok</a>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Arda Yılmaz. Tüm hakları saklıdır. | Geliştirici: <span>Mert</span></p>
    </footer>

    <script>
        let secilenSaat = "";

        function saatSec(element) {
            document.querySelectorAll('.hour-btn').forEach(btn => btn.classList.remove('selected'));
            element.classList.add('selected');
            secilenSaat = element.innerText;
        }

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
</html>
