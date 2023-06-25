var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyvGXsbyt2MzFDD8jRCr1gWAGK7Oq3th1kwZF2XR-Dh1paALagLSvj0eqI6xwsTrZwumA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },3000)  
        form.reset()
        
    })
      .catch(error => console.error('Error!', error.message))
  })



  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.header-text, #about, #services, #portfolio, .contact-left',{origin: 'top'});
  ScrollReveal().reveal('.bg-img, .auto-col-1, .contact-right',{origin: 'bottom'});
  ScrollReveal().reveal('.auto-col-1, .contact-left',{origin: 'left'});
  ScrollReveal().reveal('.auto-col-2, .contact-right',{origin: 'right'});

  const typed = new Typed('.multi-text',{
    strings:['CSE Graduate','Software Engineer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
