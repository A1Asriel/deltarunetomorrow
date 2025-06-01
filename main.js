const june5th = new Date("2025-05-05T00:00:00+09:00");

function isTomorrow() {
    const currentDate = new Date();
    return currentDate.getMonth() === june5th.getMonth() && currentDate.getDate() === june5th.getDate()-1;
}

function setTomorrow() {
    if (isTomorrow()) {
        const tomorrowElement = document.querySelector('.tomorrow');
        tomorrowElement.style.display = 'block';
    } else {
        const notTomorrowElement = document.querySelector('.not-tomorrow');
        notTomorrowElement.style.display = 'block';
    }
}

function setRandomGradient() {
    const gradients = [
        `repeating-linear-gradient(
        135deg,
        #ff0000,
        #ff0000 calc(100% / 6 * 1),
        #ff8800 calc(100% / 6 * 1),
        #ff8800 calc(100% / 6 * 2),
        #ffff00 calc(100% / 6 * 2),
        #ffff00 calc(100% / 6 * 3),
        #00ff00 calc(100% / 6 * 3),
        #00ff00 calc(100% / 6 * 4),
        #0000ff calc(100% / 6 * 4),
        #0000ff calc(100% / 6 * 5),
        #8800ff calc(100% / 6 * 5),
        #8800ff 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #333333,
        #333333 calc(100% / 7 * 1),
        #b9b9b9 calc(100% / 7 * 1),
        #b9b9b9 calc(100% / 7 * 2),
        #ffffff calc(100% / 7 * 2),
        #ffffff calc(100% / 7 * 3),
        #b8f483 calc(100% / 7 * 3),
        #b8f483 calc(100% / 7 * 4),
        #ffffff calc(100% / 7 * 4),
        #ffffff calc(100% / 7 * 5),
        #b9b9b9 calc(100% / 7 * 5),
        #b9b9b9 calc(100% / 7 * 6),
        #333333 calc(100% / 7 * 6),
        #333333 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #d60270,
        #d60270 calc(100% / 5 * 2),
        #9b4f96 calc(100% / 5 * 2),
        #9b4f96 calc(100% / 5 * 3),
        #0038a8 calc(100% / 5 * 3),
        #0038a8 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #ff218c,
        #ff218c calc(100% / 3 * 1),
        #ffd800 calc(100% / 3 * 1),
        #ffd800 calc(100% / 3 * 2),
        #21b1ff calc(100% / 3 * 2),
        #21b1ff 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #333333,
        #333333 calc(100% / 4 * 1),
        #b9b9b9 calc(100% / 4 * 1),
        #b9b9b9 calc(100% / 4 * 2),
        #ffffff calc(100% / 4 * 2),
        #ffffff calc(100% / 4 * 3),
        #800080 calc(100% / 4 * 3),
        #800080 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #fff430,
        #fff430 calc(100% / 4 * 1),
        #ffffff calc(100% / 4 * 1),
        #ffffff calc(100% / 4 * 2),
        #9c59d1 calc(100% / 4 * 2),
        #9c59d1 calc(100% / 4 * 3),
        #333333 calc(100% / 4 * 3),
        #333333 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #5bcefa,
        #5bcefa calc(100% / 5 * 1),
        #f5a9b8 calc(100% / 5 * 1),
        #f5a9b8 calc(100% / 5 * 2),
        #ffffff calc(100% / 5 * 2),
        #ffffff calc(100% / 5 * 3),
        #f5a9b8 calc(100% / 5 * 3),
        #f5a9b8 calc(100% / 5 * 4),
        #5bcefa calc(100% / 5 * 4),
        #5bcefa 100%
    )`,
    `repeating-linear-gradient(
        135deg,
        #a40061,
        #a40061 calc(100% / 7 * 1),
        #b75592 calc(100% / 7 * 1),
        #b75592 calc(100% / 7 * 2),
        #d063a6 calc(100% / 7 * 2),
        #d063a6 calc(100% / 7 * 3),
        #ffffff calc(100% / 7 * 3),
        #ffffff calc(100% / 7 * 4),
        #d063a6 calc(100% / 7 * 4),
        #d063a6 calc(100% / 7 * 5),
        #b75592 calc(100% / 7 * 5),
        #b75592 calc(100% / 7 * 6),
        #a40061 calc(100% / 7 * 6),
        #a40061 100%
    )`,
    ];
    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const overlay = document.querySelector('.stripes-overlay');
    if (overlay) {
        overlay.style.background = randomGradient;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTomorrow();
    setRandomGradient();
});
