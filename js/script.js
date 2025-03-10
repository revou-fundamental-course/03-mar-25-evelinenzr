var nama = prompt("Siapa nama Anda?");

    // Menampilkan hasil di halaman
    if (nama) {
        document.getElementById('greeting').innerText = "Hi " + nama + ", Selamat Datang di Website kami";
    } else {
        document.getElementById('greeting').innerText = "Hi, Selamat Datang di Website kami";
    }
    document.getElementById('submit').addEventListener('click', function() {
        // Mengambil nilai dari input
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var phone = document.getElementById('phone').value;

        // Menampilkan hasil di bagian result
        document.getElementById('displayName').innerText = "Nama: " + name;
        document.getElementById('displayEmail').innerText = "Email: " + email;
        document.getElementById('displayPhone').innerHTML = "Nomor Telepon: " + phone;
        document.getElementById('displayMessage').innerText = "Pesan: " + message;


        // Menampilkan div result
        document.getElementById('result').style.display = 'block';
    });