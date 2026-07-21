const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("white");

});
// Typing Effect
const text = "Zohaib Abbas | Frontend Developer";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);

    }

}

typing.innerHTML = "";

typeWriter();



// Download CV Button


const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{

    alert("CV Download Feature Coming Soon 😊");

});



// Navbar Active Effect


const links = document.querySelectorAll("nav ul li a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});



// Project Card Animation


const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});



// Welcome Message


setTimeout(()=>{

    alert("👋 Welcome To My Portfolio Website");

},1000);



// Live Clock


const clock = document.createElement("h3");

clock.style.textAlign="center";
clock.style.margin="20px";
clock.style.color="cyan";

document.body.prepend(clock);

function updateClock(){

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);



// Random Background Glow


setInterval(()=>{

    document.body.style.filter=
    `hue-rotate(${Math.random()*360}deg)`;

},5000);