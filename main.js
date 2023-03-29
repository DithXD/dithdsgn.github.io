const checkbox = document.getElementById('check');
const navBar = document.querySelector('.navBar');
const dith = document.querySelector('.text-title')
const nav = document.querySelector('#nav');

checkbox.addEventListener('change', function(){
    if (this.checked) {
        navBar.style.transform = 'translateX(0%)';
        dith.style.position = 'fixed';
        nav.style.position = 'fixed';
    }else{
        navBar.style.transform = 'translateX(100%)';
        dith.style.position = 'relative';
        nav.style.position = 'relative';
    }
});

// Animasi Text Slide Up
const text = document.querySelector('.animate-text').children,
        textLen = text.length;
var index = 0;

function animateText() {
    for(let i = 0; i < textLen; i++){
        text[i].classList.remove('text-in', 'text-out');
    }
    text[index].classList.add('text-in');

    setTimeout(function(){
        if(index == textLen - 1) {
            index = 0;
        }else{
            index++;
        }
        animateText();
    }, 1000)

    setTimeout(function(){
        text[index].classList.add('text-out');
    }, 900)
}
// window.onload=animateText


// Background berganti
var color = ["#F9ED69","#402218","#283618","#023047"];
var textCol = ["black", "#F9ED69", "#fff3b0", "#90e0ef"]
var bg = document.querySelector(".wrap-content2");
var textColor = document.querySelector('.text-content2')
var indexColors = 0;

setInterval(function(){
   bg.style.backgroundColor = color[indexColors];
   textColor.style.color = textCol[indexColors];
   indexColors = (indexColors+1) % color.length;

}, 1000)

function animasiText() {
    var duration = 1000; // durasi animasi
    var textContent2 = document.querySelector(".text-content2");
    textContent2.style.animationDuration = duration + "ms";
}

animateText();
animasiText();

// Menghitung scroll
const kotak = document.querySelector('.square');
const emote = document.querySelector('.gambar');
const kiri = document.querySelector('.kiri');
const kanan = document.querySelector('.kanan');
const content3 = document.querySelector('.content-3')
// const emoteKiri = classList.add('emoteKiri340px')

window.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    
    if((scrollPosition > 1100 && scrollPosition < 1200)){
        kotak.style.transform = 'translateX(-40%)';
        kotak.style.backgroundColor = '#f07167'
        kanan.style.opacity = '1';
        kiri.style.opacity = '0';
        emote.style.content = 'url(emotePng.png)';
        content3.style.backgroundColor = '#ffdc5e';
    }else if((scrollPosition < 1100 && scrollPosition < 2300)){
        // kotak.style.margin = 'auto auto auto 40%';
        kotak.style.transform = 'translateX(40%)';
        kotak.style.backgroundColor = "#cbf3f0";
        kiri.style.opacity = '1';
        kanan.style.opacity = '0';
        emote.style.content = 'url(emotePng2.png)';
        content3.style.backgroundColor = '#011627';
    }


    // unutk desktop
    // if((scrollPosition > 2300 || scrollPosition > 3400)){
    //     kotak.style.transform = 'translateX(-40%)';
    //     kotak.style.backgroundColor = '#f07167'
    //     kanan.style.opacity = '1';
    //     kiri.style.opacity = '0';
    //     emote.style.content = 'url(emotePng.png)';
    //     content3.style.backgroundColor = '#ffdc5e';
    // }else if((scrollPosition > 1100 && scrollPosition < 2300)){
    //     // kotak.style.margin = 'auto auto auto 40%';
    //     kotak.style.transform = 'translateX(40%)';
    //     kotak.style.backgroundColor = "#cbf3f0";
    //     kiri.style.opacity = '1';
    //     kanan.style.opacity = '0';
    //     emote.style.content = 'url(emotePng2.png)';
    //     content3.style.backgroundColor = '#011627';
    // }
})


window.onload=animateText;
window.onload=animasiText;