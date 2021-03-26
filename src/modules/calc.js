const calc = () => {
    const priceTotal = document.getElementById('price-total');
    if (priceTotal) {
        const cardOrder = document.getElementById('card_order'),
            cardTime = document.querySelector('.time'),
            cardType = document.querySelector('label[for^="m"]').textContent,
            clubName = document.querySelector('input[name="club-name"]').value,
            code = document.querySelector('input[name="code"]');
        const getPrice = (adress, card) => {
            fetch(`./${adress}.html`)
                .then(response => response.text())
                .then(responseText => {
                    const doc = new DOMParser().parseFromString(responseText, 'text/html'),
                        elements = doc.querySelectorAll('label[for^="t"]');
                    for (const element of elements) {
                        const solo = element.querySelector('.solo').textContent,
                            testSolo = /[соло]/i.test(solo),
                            long = element.querySelector('.long').textContent;
                        if (long === card && testSolo) {
                            const cost = element.querySelector('.cost').textContent,
                                price = +cost.replace(/i/, '');
                            if (code.value === 'ТЕЛО2021') {
                                const percent = price / 100 * 30;
                                priceTotal.textContent = price - Math.ceil(percent);
                            } else {
                                priceTotal.textContent = price;
                            }
                            const hiddenInput = document.createElement('input'),
                                form = document.getElementById('card_order');
                            hiddenInput.setAttribute('value', `${priceTotal.textContent}`);
                            hiddenInput.setAttribute('name', 'price-total');
                            hiddenInput.style.display = 'none';
                            form.appendChild(hiddenInput);
                        }
                    }
                });
        };
        let adress = clubName;
        let card = cardType;
        getPrice(adress, card);
        cardOrder.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('input[name="club-name"]')) {
                adress = target.value;
            }
            getPrice(adress, card);
        });
        cardTime.addEventListener('click', event => {
            const target = event.target;
            if (target.matches('label[for^="m"]')) {
                card = target.textContent;
            }
            getPrice(adress, card);
        });
    }
};

export default calc;