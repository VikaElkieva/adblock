
let isDragging = false;
const slider = document.querySelector('.slider-wrapper');
const sosCircle = document.querySelector('.sos-circle');

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('touchstart', (e) => startDrag(e.touches[0]));

function startDrag(event) {
    isDragging = true;
    moveSOS(event);
}

slider.addEventListener('mousemove', (event) => {
    if (isDragging) moveSOS(event);
});

slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('touchend', stopDrag);

function moveSOS(event) {
    const sliderRect = slider.getBoundingClientRect();
    const sosRect = sosCircle.getBoundingClientRect();
    let newLeft = event.clientX - sliderRect.left - sosRect.width / 2;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > sliderRect.width - sosRect.width) newLeft = sliderRect.width - sosRect.width;

    sosCircle.style.left = `${newLeft}px`;

    // Автоматическое завершение при достижении середины
    if (newLeft > sliderRect.width / 2) {
        sosCircle.style.left = `${sliderRect.width - sosRect.width}px`;

        // Пауза перед переходом на приложение для плавного завершения
        setTimeout(() => {
            window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
        }, 500);
    }
}

function stopDrag() {
    isDragging = false;
}
