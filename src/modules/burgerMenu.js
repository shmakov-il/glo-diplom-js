
const burgerMenu = () => {
    const hiddenSmall = document.querySelector('.hidden-small'),
        hiddenLarge = document.querySelector('.hidden-large'),
        topMenu = document.querySelector('.top-menu'),
        headSlider = document.querySelector('.head-slider'),
        head = document.querySelector('.head');

    const handlerMenu = () => {
        if (document.documentElement.clientWidth < 768) {
            hiddenSmall.style.display = 'none';
            hiddenLarge.style.display = 'block';
            setTimeout(() => {
                topMenu.style.cssText = `
                margin-top: ${head.offsetHeight}px;
                position: fixed;
                `;
                headSlider.style.paddingTop = '25px';
            }, 0);
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 0) {
                    topMenu.style.marginTop = '0';
                } else if (document.documentElement.scrollTop === 0) {
                    topMenu.style.marginTop = `${head.offsetHeight}px`;
                }
            });
        } else if (window.innerWidth >= 768) {
            hiddenLarge.style.display = 'none';
            hiddenSmall.style.display = 'flex';
            topMenu.style.cssText = `
                margin-top: 0x;
                position: inherit;
                `;
            headSlider.style.paddingTop = '0';
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop === 0) {
                    topMenu.style.marginTop = '0';
                }
            });
        }
    };

    handlerMenu();

    window.addEventListener('resize', handlerMenu);
};

export default burgerMenu;