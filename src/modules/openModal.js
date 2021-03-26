const openModal = () => {
    const header = document.querySelector('.header-main'),
        visitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        thanks = document.getElementById('thanks'),
        fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');

    header.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('open-popup')) {
            visitForm.style.display = 'block';
        }
        if (target.classList.contains('callback-btn')) {
            callbackForm.style.display = 'block';
        }
    });

    if (fixedGift) {
        fixedGift.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('div>img')) {
                gift.style.display = 'block';
                fixedGift.classList.add('active-gift');
            }
        });
    }

    const hiddenWindow = event => {
        const target = event.target;
        if (target.classList.contains('overlay') ||
            target.classList.contains('close_icon') ||
            target.classList.contains('close-btn')) {
            visitForm.style.display = 'none';
            callbackForm.style.display = 'none';
            thanks.style.display = 'none';
            if (fixedGift) {
                gift.style.display = 'none';
                fixedGift.classList.remove('active-gift');
            }
        }
    };

    visitForm.addEventListener('click', hiddenWindow);
    callbackForm.addEventListener('click', hiddenWindow);
    thanks.addEventListener('click', hiddenWindow);
    if (fixedGift) {
        gift.addEventListener('click', hiddenWindow);
    }

    if (fixedGift) {
        window.addEventListener('resize', () => {
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 0 && document.documentElement.clientWidth < 768) {
                    fixedGift.style.top = '70px';
                } else if (document.documentElement.scrollTop === 0 && document.documentElement.clientWidth < 768) {
                    fixedGift.style.top = '15px';
                }
            });
        });
    }
};

export default openModal;