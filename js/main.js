

  // ===== Sticky Header =====
  if (header) {
    const checkSticky = () => {
      if (window.scrollY > 50) header.classList.add("sticky");
      else header.classList.remove("sticky");
    };
    checkSticky();
    window.addEventListener("scroll", checkSticky, { passive: true });
  }

  // ===== Slider =====
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  if (next && prev) {
    next.addEventListener("click", () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    });

    prev.addEventListener("click", () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    });
  }

  // ===== Testimonial Swiper =====
  const swiperTestimonial = new Swiper(".testimonial__swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    grabCursor: true,
    speed: 600,
    effect: "coverflow",
    coverflowEffect: { rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });

  // ===== Fade Up On Scroll =====
  const aboutText = document.querySelector('.about-text');
  const aboutImg = document.querySelector('.about-image');

  function fadeUpOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    if(aboutText && aboutText.getBoundingClientRect().top < triggerBottom){
      aboutText.style.opacity = 1;
      aboutText.style.transform = 'translateY(0)';
    }

    if(aboutImg && aboutImg.getBoundingClientRect().top < triggerBottom){
      aboutImg.style.opacity = 1;
      aboutImg.style.transform = 'translateY(0)';
    }
  }
  window.addEventListener('scroll', fadeUpOnScroll);

  // ===== Slider Before/After =====
  const slider = document.querySelector('.slider');
  const beforeImg = document.querySelector('.image-before');
  const sliderLine = document.querySelector('.slider-line');
  const sliderBtn = document.querySelector('.slider-button');

  if(slider && beforeImg && sliderLine && sliderBtn){
    slider.addEventListener('input', (e) => {
      const value = e.target.value + '%';
      beforeImg.style.width = value;
      sliderLine.style.left = value;
      sliderBtn.style.left = value;
    });
  }

  // ===== Typewriter palabras dinámicas =====
  const typeWords = ["Seguro", "Tranquilo", "Disfrutando"];
  let index = 0;
  const typeText = document.getElementById("type-text");

  if(typeText){
    setInterval(() => {
      typeText.textContent = typeWords[index];
      index = (index + 1) % typeWords.length;
    }, 1500);
  }





  
