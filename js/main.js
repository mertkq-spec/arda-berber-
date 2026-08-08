// ==========================================
// BERBER RANDEVU SISTEMI - ANA JS
// ==========================================

let secilenSaat = "";

// Menü aç/kapat (mobil)
function menuAcKapat() {
    document.getElementById('navMenu').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
}

// Tema değiştirme
function temaDegistir() {
    const html = document.documentElement;
    const btn = document.querySelector('.theme-btn');
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        btn.innerText = '🌙 Koyu';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.innerText = '☀️ Açık';
    }
}

// Saat seçme
function saatSec(element) {
    document.querySelectorAll('.hour-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    secilenSaat = element.innerText;
    document.getElementById('hataSaat').classList.remove('show');
}

// Form doğrulama
function formuKontrolEt() {
    let hatasiz = true;
    
    const ad = document.getElementById('musteriAdi').value.trim();
    const tel = document.getElementById('musteriTel').value.trim();
    const tarih = document.getElementById('randevuTarihi').value;
    
    // Ad kontrolü
    if (ad.length < 2) {
        document.getElementById('hataAd').classList.add('show');
        hatasiz = false;
    } else {
        document.getElementById('hataAd').classList.remove('show');
    }
    
    // Telefon kontrolü (en az 10 haneli olmalı)
    const telTemiz = tel.replace(/\s/g, '').replace(/^0/, '');
    if (telTemiz.length < 10) {
        document.getElementById('hataTel').classList.add('show');
        hatasiz = false;
    } else {
        document.getElementById('hataTel').classList.remove('show');
    }
    
    // Tarih kontrolü
    if (!tarih) {
        document.getElementById('hataTarih').classList.add('show');
        hatasiz = false;
    } else {
        document.getElementById('hataTarih').classList.remove('show');
    }
    
    // Saat kontrolü
    if (!secilenSaat) {
        document.getElementById('hataSaat').classList.add('show');
        hatasiz = false;
    } else {
        document.getElementById('hataSaat').classList.remove('show');
    }
    
    return hatasiz;
}

// Randevu kaydet (localStorage'a)
function randevuKaydet() {
    if (!formuKontrolEt()) return;
    
    const yeniRandevu = {
        id: Date.now(), // Her randevuya benzersiz numara ver
        ad: document.getElementById('musteriAdi').value.trim(),
        tel: document.getElementById('musteriTel').value.trim(),
        hizmet: document.getElementById('hizmetSecim').value,
        tarih: document.getElementById('randevuTarihi').value,
        saat: secilenSaat,
        durum: "Bekliyor", // Yeni randevular ilk başta "Bekliyor" olur
        olusturmaTarihi: new Date().toISOString()
    };
    
    // Önceki randevuları al
    let randevular = JSON.parse(localStorage.getItem('randevular')) || [];
    
    // Yenisini ekle
    randevular.push(yeniRandevu);
    
    // Tekrar kaydet
    localStorage.setItem('randevular', JSON.stringify(randevular));
    
    // Başarı mesajı göster
    document.getElementById('basariMesaj').classList.add('show');
    
    // Formu temizle
    document.getElementById('musteriAdi').value = '';
    document.getElementById('musteriTel').value = '';
    document.getElementById('randevuTarihi').value = '';
    document.querySelectorAll('.hour-btn').forEach(btn => btn.classList.remove('selected'));
    secilenSaat = '';
    
    // 3 saniye sonra mesajı gizle
    setTimeout(() => {
        document.getElementById('basariMesaj').classList.remove('show');
    }, 3000);
}

// Sayfa açılınca çalışan şeyler
document.addEventListener('DOMContentLoaded', function() {
    // Tarih inputuna minimum bugünü ayarla (geçmiş tarih seçilemesin)
    const bugun = new Date().toISOString().split('T')[0];
    document.getElementById('randevuTarihi').setAttribute('min', bugun);
    
    // Scroll animasyonları
    const gozlemci = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        gozlemci.observe(section);
    });
});