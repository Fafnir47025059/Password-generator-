function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  const passField = document.getElementById("password");
  passField.select();
  document.execCommand("copy");
  alert("Password copied!");
}
