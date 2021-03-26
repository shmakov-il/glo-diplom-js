const changeClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target.textContent === 'Выбрать клуб') {
            const element = clubsList.querySelector('ul');
            element.setAttribute('id', 'change-club');
            const change = document.getElementById('change-club');
            change.classList.toggle('active-club');
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 0) {
                    change.classList.remove('active-club');
                }
            });
        } else if (document.getElementById('change-club')) {
            const change = document.getElementById('change-club');
            change.classList.remove('active-club');
        }
    });
};

export default changeClub;