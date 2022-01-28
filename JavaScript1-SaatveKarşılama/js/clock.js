let fullName = prompt("Lütfen Adınızı Giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <strong>${fullName}</strong>`

let date = new Date();


function tarihSaat() {
    var date = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    saat = date.toLocaleTimeString();
    document.getElementById("myClock").innerHTML = saat + "  " + gunler[date.getDay()];
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);

