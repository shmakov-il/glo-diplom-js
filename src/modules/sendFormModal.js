const sendFormModal = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const statusMessage = document.createElement('div');
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const formSubmit = target => {
        const formText = target.innerHTML;
        statusMessage.style.cssText = 'font-size: 1.1rem; color: #ffffff;';
        statusMessage.textContent = loadMessage;
        target.appendChild(statusMessage);
        const formData = new FormData(target);
        target.reset();
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        const message = result => {
            target.style.cssText = 'padding-top: 25%; font-size: 1.1rem; color: #ffffff;';
            target.textContent = result;
        };
        const removeMessage = () => {
            setTimeout(() => {
                target.removeAttribute('style');
                target.innerHTML = formText;
                target.closest('.popup').removeAttribute('style');
            }, 5000);
        };
        postData(body).then(response => {
            if (response.status !== 200) {
                throw new Error('Status network not 200');
            }
            if (target.closest('.popup')) {
                document.getElementById('thanks').style.display = 'block';
            }
        }).catch(error => {
            if (target.closest('.popup')) {
                message(errorMessage);
                removeMessage();
            }
            console.error(error);
        });
    };
    document.body.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        if (target.closest('.popup')) {
            if (target.querySelector('input[type="checkbox"]').checked) {
                formSubmit(target);
            } else {
                statusMessage.style.cssText = 'padding-top: 5px; color: tomato;';
                statusMessage.textContent = 'Подтвердите согласие на обработку персональных данных данных';
                target.appendChild(statusMessage);
                setTimeout(() => statusMessage.remove(), 3000);
            }
        }
    });
};

export default sendFormModal;