// Simpel login demo (cek hardcoded username/password)
    document.getElementById('login-form').addEventListener('submit', function(e){
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');

      // Contoh username/password
      if(username === "admin" && password === "12345"){
        alert("Login Berhasil!");
        window.location.href = "admin.html"; // nanti bisa diarahkan ke dashboard
      } else {
        errorMessage.textContent = "Username atau password salah!";
      }
    });