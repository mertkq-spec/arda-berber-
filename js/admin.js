// ==========================================
// BERBER RANDEVU SISTEMI - ADMIN JS
// ==========================================

const ADMIN_KULLANICI = "admin";
const ADMIN_SIFRE = "admin123";

// Sayfa açılınca kontrol et
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminGiris') === 'evet') {
        paneliGoster();
    }
});

// Giriş yap
function girisYap() {
    const ka = document.getElementById('kullaniciAdi').value;
    const sf = document.getElementById('sifre').value;
    
    if (ka === ADMIN_KULLANICI && sf === ADMIN_SIFRE) {
        localStorage.setItem('adminGiris', 'evet');
        paneliGoster();
    } else {
        alert('❌ Kullanıcı adı veya şifre hatalı!');
    }
}

// Çıkış yap
function cikisYap() {
    localStorage.removeItem('adminGiris');
    location.reload();
}

// Paneli göster
function paneliGoster() {
    document.getElementById('girisEkrani').style.display = 'none';
    document.getElementById('adminPaneli').style.display = 'block';
    istatistikleriGuncelle();
    randevulariGoster();
}

// İstatistikleri hesapla
function istatistikleriGuncelle() {
    const randevular = JSON.parse(localStorage.getItem('randevular')) || [];
    const bugun = new Date().toISOString().split('T')[0];
    
    let toplam = randevular.length;
    let bugunku = randevular.filter(r => r.tarih === bugun).length;
    let bekleyen = randevular.filter(r => r.durum === 'Bekliyor').length;
    
    // Gelir hesapla
    let gelir = 0;
    randevular.forEach(r => {
        if (r.durum === 'Tamamlandı') {
            const fiyat = parseInt(r.hizmet.match(/\d+/)[0]);
            gelir += fiyat;
        }
    });
    
    document.getElementById('toplamRandevu').innerText = toplam;
    document.getElementById('bugunRandevu').innerText = bugunku;
    document.getElementById('bekleyenRandevu').innerText = bekleyen;
    document.getElementById('toplamGelir').innerText = gelir + ' TL';
}

// Randevuları tabloya yaz
function randevulariGoster() {
    let randevular = JSON.parse(localStorage.getItem('randevular')) || [];
    const filtre = document.getElementById('durumFiltre').value;
    const arama = document.getElementById('arama').value.toLowerCase();
    
    // Filtrele
    if (filtre !== 'hepsi') {
        randevular = randevular.filter(r => r.durum === filtre);
    }
    
    // Ara
    if (arama) {
        randevular = randevular.filter(r => 
            r.ad.toLowerCase().includes(arama) || 
            r.tel.includes(arama)
        );
    }
    
    // Tarihe göre sırala (en yeni en üstte)
    randevular.sort((a, b) => new Date(b.tarih + 'T' + b.saat) - new Date(a.tarih + 'T' + a.saat));
    
    const tablo = document.getElementById('randevuTablo');
    const bosMesaj = document.getElementById('bosMesaj');
    
    if (randevular.length === 0) {
        tablo.innerHTML = '';
        bosMesaj.style.display = 'block';
        return;
    }
    
    bosMesaj.style.display = 'none';
    
    tablo.innerHTML = randevular.map(r => `
        <tr>
            <td>#${r.id.toString().slice(-4)}</td>
            <td>${r.ad}</td>
            <td>${r.tel}</td>
            <td>${r.hizmet}</td>
            <td>${r.tarih}</td>
            <td>${r.saat}</td>
            <td><span class="durum-badge durum-${r.durum.toLowerCase().replace('ı','i')}">${r.durum}</span></td>
            <td>
                <button class="btn-kucuk btn-duzenle" onclick="durumDegistir(${r.id})">Durum</button>
                <button class="btn-kucuk btn-sil" onclick="sil(${r.id})">Sil</button>
            </td>
        </tr>
    `).join('');
}

// Durum değiştir (Bekliyor -> Onaylandı -> Tamamlandı -> İptal)
function durumDegistir(id) {
    let randevular = JSON.parse(localStorage.getItem('randevular')) || [];
    const r = randevular.find(x => x.id === id);
    
    if (!r) return;
    
    const durumlar = ['Bekliyor', 'Onaylandı', 'Tamamlandı', 'İptal'];
    const simdikiIndex = durumlar.indexOf(r.durum);
    const yeniIndex = (simdikiIndex + 1) % durumlar.length;
    
    r.durum = durumlar[yeniIndex];
    
    localStorage.setItem('randevular', JSON.stringify(randevular));
    istatistikleriGuncelle();
    randevulariGoster();
}

// Randevu sil
function sil(id) {
    if (!confirm('Bu randevuyu silmek istediğine emin misin?')) return;
    
    let randevular = JSON.parse(localStorage.getItem('randevular')) || [];
    randevular = randevular.filter(r => r.id !== id);
    
    localStorage.setItem('randevular', JSON.stringify(randevular));
    istatistikleriGuncelle();
    randevulariGoster();
}