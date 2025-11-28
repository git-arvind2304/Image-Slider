  
    const slides = document.querySelectorAll('#slides img');
    const slidesContainer = document.getElementById('slides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.getElementById('slider');

    let index = 0;
    const total = slides.length;
    let autoPlayInterval;

    function updateSlider() {
      const offset = -index * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      index = (index + 1) % total;
      updateSlider();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      updateSlider();
    }

    function startAuto() {
      autoPlayInterval = setInterval(nextSlide, 3000);
    }

    function stopAuto() {
      clearInterval(autoPlayInterval);
    }

    /* ---- event listeners ---- */
    nextBtn.addEventListener('click', () => {
      stopAuto(); startAuto(); // reset timer
      nextSlide();
    });
    prevBtn.addEventListener('click', () => {
      stopAuto(); startAuto();
      prevSlide();
    });

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    /* ---- initial ---- */
    updateSlider();
    startAuto();
  