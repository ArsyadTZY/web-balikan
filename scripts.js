document.addEventListener('DOMContentLoaded', () => {
    const showMessageBtn = document.getElementById('showMessageBtn');
    const personalMessage = document.getElementById('personalMessage');

    showMessageBtn.addEventListener('click', () => {
        personalMessage.textContent = "Bubub Aku Kangen Kamu. Aku mau kita mulai dari 0 lagi Sayang, Balik ke Aku Lagi Pliss (:";
        showMessageBtn.style.display = 'none'; // Sembunyikan tombol setelah pesan ditampilkan
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Makasi Cantikk Udah mau Isi!');
        contactForm.reset(); // Reset form setelah pengiriman
    });
});
