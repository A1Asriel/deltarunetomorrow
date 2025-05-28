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

document.addEventListener('DOMContentLoaded', function() {
    setTomorrow();
});
