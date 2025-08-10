(function() {
    const webhookURL = "https://discord.com/api/webhooks/1316763594679128156/5uxX2K0-Tih-_2AdIwzgH1dusbMZNzc4LofYJrdAsjtXuHC5L6iZQL-hToO_0tyZxFQR"; // ganti dengan webhook kamu

    // Ambil info dasar
    const data = {
        time: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        url: window.location.href
    };

    // Coba ambil IP publik (pakai API gratis)
    fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(ipData => {
            data.ip = ipData.ip;

            // Kirim ke Discord
            fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: `🔍 **Kunjungan Baru**\n🌐 URL: ${data.url}\n📅 Waktu: ${data.time}\n💻 UA: ${data.userAgent}\n📍 IP: ${data.ip}`
                })
            });
        })
        .catch(() => {
            // Kalau gagal ambil IP tetap kirim datanya
            fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: `🔍 **Kunjungan Baru**\n🌐 URL: ${data.url}\n📅 Waktu: ${data.time}\n💻 UA: ${data.userAgent}\n📍 IP: (tidak tersedia)`
                })
            });
        });
})();
