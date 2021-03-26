const validationForm = () => {
    maskPhone('#phone');
    maskPhone('#callback_form-phone');
    maskPhone('#callback_footer_form-phone');
    maskPhone('#callback_form1-phone');
    maskPhone('#callback_form2-phone');

    const formNameInput = event => {
        const target = event.target;
        target.value = target.value.replace(/[^а-яё\s]/gi, '');
        target.value = target.value.replace(/ +/g, ' ').trim();
        if (target.value.length < 2) {
            target.style.border = '3px solid tomato';
        } else {
            target.removeAttribute('style');
        }
    };
    const formNameBlur = event => {
        const target = event.target;
        if (target.value.length < 2) {
            target.value = '';
            target.removeAttribute('style');
        } else {
            target.value = target.value.split(/\s+/)
                .map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
                .trim();
        }
    };

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('[placeholder="Ваше имя..."]')) {
            target.addEventListener('input', formNameInput);
            target.addEventListener('blur', formNameBlur);
        }
    });
};

export default validationForm;