const addArrow = () => {
    const toTop = document.getElementById('totop'),
        headerMain = document.querySelector('.header-main');
    console.log(headerMain.scrollHeight);
    toTop.style.cssText = 'display: none !important';
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > headerMain.scrollHeight) {
            toTop.style.cssText = `
            position: fixed;
            display: block;
            `;
        } else if (document.documentElement.scrollTop < headerMain.scrollHeight) {
            toTop.style.cssText = 'display: none !important';
        }
    });
};

export default addArrow;