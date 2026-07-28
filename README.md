<img width="921" height="2048" alt="a50801f5-a779-47dc-aaf6-ce861bf1e916" src="https://github.com/user-attachments/assets/c4c3777c-3809-40ba-9bef-2e8d3188c141" />
<img width="921" height="2048" alt="a2eaa8ed-632b-4d6e-b115-ceb2d5ed519d" src="https://github.com/user-attachments/assets/ee82a2ee-ea5b-4232-a3f5-0323cce912f3" />
<img width="921" height="2048" alt="81d63c08-e2d8-40f9-af24-09c6dc71f5ba" src="https://github.com/user-attachments/assets/bb0cfa1a-642d-4933-b9f1-6013b15b6062" />
<img width="921" height="2048" alt="6fb42082-56ab-4d8f-a86c-0ed713a0b06b" src="https://github.com/user-attachments/assets/0bc1261e-a65e-41ad-b467-eb3adbe49a8c" />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arda Barber - Profesyonel Erkek Kuaförü</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #0f172a;
            font-family: 'Lato', sans-serif;
            color: #f8fafc;
            line-height: 1.6;
        }

        header {
            background-color: #1e293b;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #334155;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #38bdf8;
            letter-spacing: 1px;
        }

        .hero {
            background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('arda1.jpg') center/cover no-repeat;
            padding: 100px 20px;
            text-align: center;
        }

        .hero h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 56px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 20px;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 40px auto;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        h2.section-title {
            font-family: 'Poppins', sans-serif;
            font-size: 36px;
            text-align: center;
            margin-bottom: 40px;
            color: #f8fafc;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }

        .service-card {
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .service-card:hover {
            transform: translateY(-5px);
            border-color: #38bdf8;
        }

        .service-card i {
            font-size: 40px;
            color: #38bdf8;
            margin-bottom: 20px;
        }

        .service-card h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 22px;
            margin-bottom: 10px;
        }

        .service-card .price {
            font-size: 20px;
            font-weight: 700;
            color: #34d399;
            margin-top: 15px;
        }

        .gallery-section {
            margin-bottom: 60px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .gallery-item {
            height: 300px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #334155;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .gallery-item img:hover {
            transform: scale(1.05);
        }

        .booking-section {
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 16px;
            padding: 40px;
            max-width: 700px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #cbd5e1;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 14px;
            background-color: #0f172a;
            border: 1px solid #475569;
            border-radius: 8px;
            color: #fff;
            font-size: 16px;
        }

        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: #38bdf8;
        }

        .whatsapp-btn {
            background-color: #25d366;
            color: white;
            border: none;
            width: 100%;
            padding: 16px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
            text-decoration: none;
        }

        .whatsapp-btn:hover {
            background-color: #22c55e;
        }

        footer {
            text-align: center;
            padding: 40px;
            color: #64748b;
            border-top: 1px solid #334155;
            margin-top: 60px;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo"><i class="fa-solid fa-scissors"></i> ARDA BERBER</div>
        <div><i class="fa-solid fa-phone"></i> 0501 296 31 40</div>
    </header>

    <section class="hero">
        <h1>Tarzını Yenile, Farkını Yansıt</h1>
        <p>Profesyonel kesim, sakal tasarımı ve modern saç bakım hizmetleri için hemen randevunu oluştur.</p>
    </section>

    <div class="container">
        <h2 class="section-title">Hizmetlerimiz</h2>
        <div class="services-grid">
            <div class="service-card">
                <i class="fa-solid fa-user-tie"></i>
                <h3>Saç Kesimi</h3>
                <p>Yüz tipine uygun modern ve klasik saç kesim teknikleri.</p>
                <div class="price">300 TL</div>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-feather"></i>
                <h3>Sakal Tıraşı & Şekillendirme</h3>
                <p>Sıcak havlu kompresi ve profesyonel sakal bakımı.</p>
                <div class="price">200 TL</div>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-spa"></i>
                <h3>Komple Bakım</h3>
                <p>Saç, sakal, yıkama ve cilt bakım paketi.</p>
                <div class="price">600 TL</div>
            </div>
        </div>

        <div class="gallery-section">
            <h2 class="section-title">Çalışmalarımızdan Kareler</h2>
            <div class="gallery-grid">
                <div class="gallery-item"><img src="arda1.jpg" alt="Arda Çalışma 1"></div>
                <div class="gallery-item"><img src="arda2.jpg" alt="Arda Çalışma 2"></div>
                <div class="gallery-item"><img src="arda3.jpg" alt="Arda Çalışma 3"></div>
                <div class="gallery-item"><img src="arda4.jpg" alt="Arda Çalışma 4"></div>
            </div>
        </div>

        <div class="booking-section">
            <h2 class="section-title" style="margin-bottom: 20px;">Hemen Randevu Al</h2>
            <div class="form-group">
                <label for="name">Ad Soyad</label>
                <input type="text" id="name" placeholder="Adınızı girin">
            </div>
            <div class="form-group">
                <label for="phone">Telefon Numarası</label>
                <input type="tel" id="phone" placeholder="05XXXXXXXXX">
            </div>
            <div class="form-group">
                <label for="service">Hizmet Seçin</label>
                <select id="service">
                    <option value="Saç Kesimi (300 TL)">Saç Kesimi - 300 TL</option>
                    <option value="Sakal Tıraşı (200 TL)">Sakal Tıraşı - 200 TL</option>
                    <option value="Komple Bakım (600 TL)">Komple Bakım - 600 TL</option>
                </select>
            </div>
            <div class="form-group">
                <label for="date">Tarih</label>
                <input type="date" id="date">
            </div>
            <div class="form-group">
                <label for="time">Saat</label>
                <select id="time">
                    <option value="10:00">10:00</option>
                    <option value="11:30">11:30</option>
                    <option value="13:00">13:00</option>
                    <option value="14:30">14:30</option>
                    <option value="16:00">16:00</option>
                    <option value="17:30">17:30</option>
                    <option value="19:00">19:00</option>
                </select>
            </div>
            
            <a href="#" id="waButton" class="whatsapp-btn" onclick="sendWhatsApp()">
                <i class="fa-brands fa-whatsapp" style="font-size: 24px;"></i> WhatsApp ile Randevu İste
            </a>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 Arda Barber. Tüm Hakları Saklıdır.</p>
    </footer>

    <script>
        function sendWhatsApp() {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (!name || !phone || !date) {
                alert('Lütfen adınızı, telefonunuzu ve tarih alanını doldurun!');
                return;
            }

            const message = `Merhaba Arda, randevu almak istiyorum.%0A%0A*Ad Soyad:* ${name}%0A*Telefon:* ${phone}%0A*Hizmet:* ${service}%0A*Tarih:* ${date}%0A*Saat:* ${time}`;
            
            const url = `https://wa.me/905012963140?text=${message}`;
            window.open(url, '_blank');
        }
    </script>
</body>
</html>
