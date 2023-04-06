const startBtn = document.getElementById('start');
const loader = document.getElementById('loader');

const preloader = (event) => {
    event.preventDefault();
    loader.classList.add('enabled');
    loader.classList.remove('disabled');
    startBtn.classList.add('disabled')
    setTimeout(() => {
        loader.classList.remove('enabled');
        loader.classList.add('disabled');
        window.location.href = '/start.html'; // Redirect to start.html
    }, 2000);
};


startBtn.addEventListener('click', preloader);
