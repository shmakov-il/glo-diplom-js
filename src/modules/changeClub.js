const changeClub = () => {
    const clubsList = document.querySelector('.clubs-list');

    clubsList.addEventListener('click', event => {
        const target = event.target;
        if (target.textContent === 'Выбрать клуб') {
            const element = clubsList.lastChild.previousSibling;
            element.setAttribute('id', 'change-club');
            const change = document.getElementById('change-club');
            change.classList.toggle('active-club');
        }
    });
};

export default changeClub;