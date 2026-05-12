
//   SWIPER CARD  //
new Swiper(".myEventSlider", {
    loop:true,
    spaceBetween:30,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        0:{ slidesPerView:1 },
        768:{ slidesPerView:2 },
        992:{ slidesPerView:3 }
    }
});
     //   SWIPER CARD  //


   //  REVIWES SWIPER CARDS // 
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

    // REVIWES SWIPER CARDS //



  //  ABOUT MODEL  //
function openAbout() {
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}
  //  ABOUT MODEL  //


    //loader//
// Letters and their classes
const letters = [
  { char: 'F', class: 'f' },
  { char: 'E', class: 'e' },
  { char: 'S', class: 's' },
  { char: 'T', class: 't' },
  { char: 'I', class: 'i' },
  { char: 'F', class: 'f2' },
  { char: 'Y', class: 'y' },
];

const typingElement = document.getElementById("typing");
let index = 0;
const typingSpeed = 300; 

function typeLetter() {
  if (index < letters.length) {
    const span = document.createElement('span');
    span.textContent = letters[index].char;
    span.classList.add(letters[index].class);
    typingElement.appendChild(span);
    index++;
    setTimeout(typeLetter, typingSpeed);
  } else {

    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("main-content").style.display = "block";
      }, 500); 
    }, 500);
  }
}

window.addEventListener("load", typeLetter);
    //loader//


//contact form
    const form = document.getElementById("contactForm");
    const btn = document.querySelector("btn.send-btn"); // select your custom tag
    const successMsg = document.getElementById("successMsg");

    btn.addEventListener("click", function(e) {
        e.preventDefault(); // prevent any default behavior just in case

        successMsg.style.display = "flex";
        form.reset();

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 4000);
    });
//contact form



    // scroll icons in footer  //
// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
    // scroll icons in footer  //

// contact form btn  //
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
// contact form btn  //
