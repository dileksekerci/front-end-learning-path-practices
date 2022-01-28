imgs = document.getElementsByTagName("img")
const movesCount = document.querySelector(".moves-counter");
const reset = document.querySelector(".reset-btn");
const bestscore = document.querySelector(".score");
let moves = 0;


var sirala = new Array();
for (i = 1; i < 7; i++)
    sirala[i] = 0

aktif1 = false
lock = 0
basladi = 0
basarili = 0



// rondom sıralama
j = 0;
for (e in imgs) {
    randomSayi = Math.floor((Math.random() * 6) + 1);
    while (sirala[randomSayi] == 2 && j < 12) {
        randomSayi = Math.floor((Math.random() * 6) + 1);
    }
    sirala[randomSayi]++

    imgs[j].id = j
    imgs[j].name = randomSayi


    //alert("rnd " + randomSayi + " j " + j)
    j++
    //alert(j +" "+ randomSayi)
}



function movesCounter() {
    movesCount.innerHTML++;
    moves++;
}

function resetgame() {
    window.location.reload();
}

function baslat(tag) {
    basladi = 1
    tag.value = basladi;
    zamanlama = setInterval(function () { tag.value = ++basladi }, 1000)
}

function tiklandi(tag) {
    if (lock == 0 && basladi != 0) {
        lock = 1;
        tiklandim(tag);
    }
    else {
        if (basladi == 0) {
            alert("Lütfen Başlama Butonuna Tıkla");
        } else {
            alert("Çok Hızlısın Yavaşla");
        }
    }

}


function tiklandim(tag) {
    tag.src = "img/number/" + tag.name + ".png"
    if (aktif1 === false) {
        // ilk kart sa
        aktif1 = tag.id
        //alert("ilk kart")
        lock = 0
        movesCounter();
    }
    else {
        // 2. kartsa
        if (document.getElementById(aktif1).name === tag.name) {
            // eğer kartlar aynıysa
            aktif1 = false
            //alert("aynı")	
            lock = 0
            basarili++
            //alert(basarili)

            if (basarili == 6) {
                clearInterval(zamanlama)
                alert("Oyunu " + basladi + " saniyede bitirdiniz. Tebrikler")

                let score = bestscore.innerHTML = 100 - (movesCount.innerHTML - 12);
                if (score > localStorage.key(1)) {
                    window.localStorage.setItem("1", bestscore.innerHTML);
                }
            }
        }
        else {
            //farklıysa
            // biraz bekle sonra kapat
            var x = aktif1
            setTimeout(function () {

                document.getElementById(x).src = "img/end.png"
                tag.src = "img/end.png"
                lock = 0
                aktif1 = false
                movesCounter();
            }, 300);
            //alert(aktif1)
        }
    }
}