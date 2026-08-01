/* ===========================================
   LOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2200);

});


/* ===========================================
   MUSIC
=========================================== */

const bgMusic = document.getElementById("bgMusic");

const beginBtn = document.getElementById("begin");

let musicStarted = false;

beginBtn.addEventListener("click", () => {

    if (!musicStarted) {

        bgMusic.volume = 0.55;

        bgMusic.play().catch(err => console.log(err));

        musicStarted = true;

    }

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

});


function changeSong(song) {

    bgMusic.src = song;

    bgMusic.play();

}


/* ===========================================
   SCROLL REVEAL
=========================================== */

const reveals = document.querySelectorAll("section");

const revealOnScroll = () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            section.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===========================================
   FLOATING HEARTS
=========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =

        5 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 900);


/* ===========================================
   SHOOTING STAR
=========================================== */

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "%";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 5000);

}

setInterval(shootingStar, 6000);


/* ===========================================
   FIREFLIES
=========================================== */

for (let i = 0; i < 18; i++) {

    const firefly = document.createElement("div");

    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "vw";

    firefly.style.top = Math.random() * 100 + "vh";

    firefly.style.animationDelay = Math.random() * 8 + "s";

    document.body.appendChild(firefly);

}


/* ===========================================
   GSAP HERO ANIMATION
=========================================== */

window.addEventListener("load", () => {

    gsap.from(".hero h1", {

        y: 80,

        opacity: 0,

        duration: 1.3

    });

    gsap.from(".subtitle", {

        y: 40,

        opacity: 0,

        duration: 1.2,

        delay: .5

    });

    gsap.from("#begin", {

        scale: .7,

        opacity: 0,

        duration: 1,

        delay: .9

    });

});
/* ===========================================
   IMAGE LIGHTBOX
=========================================== */

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        const image = document.createElement("img");
        image.src = img.src;

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        gsap.from(image,{
            scale:0.8,
            opacity:0,
            duration:0.4
        });

        lightbox.addEventListener("click",()=>{

            gsap.to(lightbox,{
                opacity:0,
                duration:0.3,
                onComplete(){
                    lightbox.remove();
                }
            });

        });

    });

});


/* ===========================================
   ENVELOPE ANIMATION
=========================================== */

document.querySelectorAll(".envelope").forEach((envelope)=>{

    envelope.addEventListener("click",()=>{

        envelope.classList.toggle("opened");

        gsap.fromTo(
            envelope.querySelector(".letter"),
            {
                y:80,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:0.8
            }
        );

    });

});


/* ===========================================
   GIFT BOX
=========================================== */

const gift=document.querySelector(".gift-box");

const giftSection=document.querySelector(".gift-section");

const msg=document.createElement("div");

msg.className="hidden-message";

msg.innerHTML=`
✨<br><br>

One last thing...

<br><br>

Thank you for becoming
one of my favourite parts
of an ordinary day.

🤍
`;

giftSection.appendChild(msg);

gift.addEventListener("click",()=>{

    gsap.to(gift,{
        rotation:25,
        scale:1.2,
        duration:.5,
        yoyo:true,
        repeat:1
    });

    msg.classList.add("show");

});


/* ===========================================
   PAUSE MUSIC DURING VIDEOS
=========================================== */

document.querySelectorAll("video").forEach(video=>{

    video.addEventListener("play",()=>{

        bgMusic.pause();

    });

    video.addEventListener("pause",()=>{

        if(musicStarted){

            bgMusic.play().catch(()=>{});

        }

    });

    video.addEventListener("ended",()=>{

        if(musicStarted){

            bgMusic.play().catch(()=>{});

        }

    });

});


/* ===========================================
   PARALLAX BACKGROUND
=========================================== */

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    document.getElementById("stars").style.transform=
    `translateY(${y*0.15}px)`;

});


/* ===========================================
   EASTER EGG
=========================================== */

let clicks=0;

document.querySelector(".moon").addEventListener("click",()=>{

    clicks++;

    if(clicks===5){

        alert("🌙\n\nSome people become unforgettable without ever asking to be.\n\nHappy Friendship Day 🤍");

        clicks=0;

    }

});


/* ===========================================
   ENDING ANIMATION
=========================================== */

const ending=document.querySelector(".ending");

const endingObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

gsap.from(".ending h1",{

opacity:0,

y:60,

duration:1

});

gsap.from(".ending p",{

opacity:0,

y:40,

duration:1,

delay:.4

});

}

});

});

endingObserver.observe(ending);


/* ===========================================
   MUSIC SWITCH
=========================================== */

function changeSong(song){

bgMusic.src=song;

bgMusic.play();

}


/* ===========================================
   THANK YOU
=========================================== */

console.log("✨ Website made with love. Happy Friendship Day!");
