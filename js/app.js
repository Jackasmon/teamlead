//мини-карусель
const vectorDown = document.querySelector('.vector_down');
const carouselBlock = document.querySelectorAll('.carousel_block');

vectorDown.addEventListener('click', () => {
    carouselBlock.forEach(e => {
        e.classList.toggle('top')
    })
})

//таймер
let timeSecond = 1800;
const timeH = document.querySelector("#timer");

displayTime(timeSecond);

const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
        endCount();
        clearInterval(countDown);
    }
}, 1000);

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
    timeH.innerHTML = "Время вышло:(";
}

//прокрутка к форме при нажатии
const $button = document.querySelectorAll('button');
const $form = document.querySelector('footer');
$button.forEach(e => {
    e.addEventListener('click', e => {
        $form.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    });
})