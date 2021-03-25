const sliderPhoto = () => {
    const slide = document.querySelectorAll('.gallery-slider>.slide'),
        slider = document.querySelector('.gallery-slider');

    slide.forEach(() => {
        const liPoint = document.createElement('li');
        liPoint.setAttribute('class', 'dots');
        document.querySelector('.slider-dots').appendChild(liPoint);
    });

    let currentSlide = 0,
        interval;

    const dots = document.querySelectorAll('.dots');
    if (currentSlide === 0) {
        dots[0].setAttribute('class', 'dots dots-active');
    }

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dots, currentSlide, 'dots-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dots, currentSlide, 'dots-active');
    };

    const startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('#arrow-next, #arrow-prev, .dots')) {
            prevSlide(slide, currentSlide, 'slide-active');
            prevSlide(dots, currentSlide, 'dots-active');
            if (target.matches('#arrow-next')) {
                currentSlide++;
            } else if ((target.matches('#arrow-prev'))) {
                currentSlide--;
            } else if (target.matches('.dots')) {
                dots.forEach((item, index) => {
                    if (item === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'slide-active');
            nextSlide(dots, currentSlide, 'dots-active');
        }
    });


    slider.addEventListener('mouseover', event => {
        if (event.target.matches('#arrow-next, #arrow-prev') || event.target.matches('.dots')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('#arrow-next, #arrow-prev') || event.target.matches('.dots')) {
            startSlide();
        }
    });
    startSlide();
};

export default sliderPhoto;