const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        statusMessage = document.createElement('div');

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const formSubmit = form => {
        if (form.closest('#card_order')) {
            statusMessage.style.cssText = 'font-size: 1.1rem; color: #000000;';
        } else {
            statusMessage.style.cssText = 'font-size: 1.1rem; color: #ffffff;';
        }

        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.paddingTop = '15px';
        const formData = new FormData(form);
        form.reset();
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        const messageError = () => {
            document.getElementById('thanks').style.display = 'block';
            document.querySelector('#thanks .form-content h4').textContent = 'Ошибка';
            document.querySelector('#thanks .form-content p').textContent = errorMessage;
        };
        setTimeout(() => statusMessage.remove(), 1000);

        postData(body).then(response => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            document.getElementById('thanks').style.display = 'block';
        }).catch(error => {
            messageError();
            console.error(error);
        });
    };

    document.body.addEventListener('submit', event => {
        event.preventDefault();
        if (!event.target.closest('.popup')) {
            const target = event.target;
            if (target.querySelector('input[type="checkbox"]')) {
                if (target.querySelector('input[type="checkbox"]').checked) {
                    formSubmit(target);
                } else {
                    statusMessage.style.cssText = 'padding-top: 15px; color: tomato;';
                    statusMessage.textContent = 'Подтвердите согласие на обработку персональных данных';
                    target.appendChild(statusMessage);
                    setTimeout(() => statusMessage.remove(), 5000);
                }
            } else if (target.querySelectorAll('input[type="radio"]')) {
                const selectClub = target.querySelectorAll('input[type="radio"]');
                if (selectClub[0].checked || selectClub[1].checked) {
                    formSubmit(target);
                } else {
                    statusMessage.style.color = 'tomato';
                    statusMessage.textContent = 'Необходимо выбрать клуб';
                    target.appendChild(statusMessage);
                    setTimeout(() => statusMessage.remove(), 5000);
                }
            }
        }
    });
};

export default sendForm;