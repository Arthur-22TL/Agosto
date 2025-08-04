const sky = document.getElementById('sky');
const btn = document.getElementById('disparar');

btn.addEventListener('click', () => {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');

    const startX = Math.random() * window.innerWidth;
    estrela.style.left = `${startX}px`;
    estrela.style.top = `0px`;

    sky.appendChild(estrela);

    estrela.addEventListener('animationend', () => {
        estrela.remove();
    });
});