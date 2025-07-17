document.getElementById("changeColorBtn").onclick = function() {
  const colors = ["#FDEEF5", "#ffcfe2"];
  const chosen = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = chosen;
  alert("warna ini oke nggak?");
  console.log (chosen)
};



let petname;

document.getElementById("submit").onclick = function() {
  petname = document.getElementById("NamaKu").value;
  document.getElementById("praise").textContent = `wah ${petname}!! WAAA LUCU BANGET NAMANYAA, Nama kucingku Charlie`;
};
