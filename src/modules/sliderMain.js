const sliderMain = () => {
    const slider = document.querySelector('.main-slider'),
        wrap = document.querySelector('header');
    let slide = document.querySelectorAll('.main-slider .slide');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
    };

    const autoPlaySlide = () => {
        slide = document.querySelectorAll('.main-slider .slide');
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    wrap.addEventListener('mouseover', event => {
        if (event.target.closest('.slide-text')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', event => {
        if (event.target.closest('.slide-text')) {
            startSlide();
        }
    });
    startSlide(2000);
};

export default sliderMain;