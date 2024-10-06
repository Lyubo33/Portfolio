
const fadeInElements = document.querySelectorAll(".fade-element");
const introGreet = document.getElementById("intro-greet");
const introName = document.getElementById("intro-name");
const introText = document.getElementById("intro-text");

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            fadeIn(entry.target);
        }else{
            fadeOut(entry.target);
        }
    });
},{threshold:0.1, rootMargin: '0px 0px -10px 0px'});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
function typeWrite(element, text , speed=26, callback){
    let i =0;
    function type(){
        if(i < text.length){
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type,speed);
        } else if(callback){
            callback();
        }
    }
    type();
}

function fadeIn(element){
    element.classList.add('fade-in');
}
function fadeOut(element){
    element.classList.remove('fade-in');
}
function TypeOut(introGreet,introName,introText){
    typeWrite(introGreet,`Hi my name is`, 30, ()=>{
        typeWrite(introName,`Lyuboslav Petrov`, 30, ()=>{
            typeWrite(introText,`but you can call me Lyubo. Welcome to my little corner on the internet, 
                where you can find some of my projects and some other stuff about me. 
                I have recently graduated with a Bachelor's degree in Computer and Software engineering,
                and am currently pursuing my Master's degree in the same field. 
                Although I may lack expereince, I make up for it in passion for software development. `,
                26, () =>{
                    document.getElementById('profile-photo').style.opacity = '1';
                    document.getElementById('skills-education').style.opacity = '1';
                });
            });
        });
}

fadeInElements.forEach((el) => observer.observe(el));
window.onload = () =>{
    document.getElementById('skills-education').style.opacity = '0';
    TypeOut(introGreet,introName,introText);
    };
