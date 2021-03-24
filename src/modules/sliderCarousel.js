const sliderCarusel = () => {
    const options = {
        main: '#services>.wrapper',
        wrap: '.services-slider',
        prev: '#prev',
        next: '#next',
        infinity: true,
        slideToShow: 5,
        responsive: [{
            breakpoint: 1100,
            slideToShow: 4
        },
        {
            breakpoint: 896,
            slideToShow: 3
        },
        {
            breakpoint: 665,
            slideToShow: 2
        },
        {
            breakpoint: 480,
            slideToShow: 1
        }
        ]
    };

    class SliderCarusel {

        constructor({
            main,
            wrap,
            position = 0,
            next,
            prev,
            maxPosition,
            infinity = false,
            slideToShow,
            responsive = []
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slideToShow = slideToShow;
            this.options = {
                position,
                widthSlide: Math.floor(100 / this.slideToShow),
                infinity,
                maxPosition
            };
            this.responsive = responsive;
        }

        addClass() {
            this.main.classList.add('carousel-slider');
            this.wrap.classList.add('carousel-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('carousel-slider__item');
            }
            const style = document.querySelectorAll('.carousel-slider__item');
            style.forEach(item => {
                item.style.flex = `0 0 ${this.options.widthSlide}%`;
            });
        }


        ctrlSlider() {
            this.next.addEventListener('click', this.nextSlider.bind(this));
            this.prev.addEventListener('click', this.prevSlider.bind(this));
        }

        nextSlider() {
            this.options.maxPosition = this.slides.length - this.slideToShow;
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `
                translateX(-${this.options.widthSlide * this.options.position}%)
            `;
            }
        }

        prevSlider() {
            this.options.maxPosition = this.slides.length - this.slideToShow;
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `
                translateX(-${this.options.widthSlide * this.options.position}%)
                `;
            }
        }

        addArrow() {
            this.prev = document.createElement('button');
            this.next = document.createElement('button');

            this.prev.className = 'glo-slider__prev';
            this.next.className = 'glo-slider__next';

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);
        }

        responsiveInit() {
            const slideToShowDefault = this.slideToShow,
                allResponse = this.responsive.map(item => item.breakpoint),
                maxResponse = Math.max(...allResponse);
            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slideToShow = this.responsive[i].slideToShow;
                            this.options.widthSlide = Math.floor(100 / this.slideToShow);
                            const style = document.querySelectorAll('.carousel-slider__item');
                            style.forEach(item => {
                                item.style.flex = `0 0 ${this.options.widthSlide}%`;
                            });
                            this.maxPosition = this.slides.length - this.slideToShow;
                        }
                    }
                } else {
                    this.slideToShow = slideToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slideToShow);
                    const style = document.querySelectorAll('.carousel-slider__item');
                    style.forEach(item => {
                        item.style.flex = `0 0 ${this.options.widthSlide}%`;
                    });
                }
            };
            checkResponse();
            window.addEventListener('resize', checkResponse);
        }

        init() {
            this.responsiveInit();
            this.addClass();
            if (this.prev && this.next) {
                this.ctrlSlider();
            } else {
                this.addArrow();
                this.ctrlSlider();
            }
        }
    }

    const carusel = new SliderCarusel(options);
    carusel.init();
};

export default sliderCarusel;