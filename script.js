
// Ползунок с кружком SOS
const sosCircle = document.querySelector('.sos-circle');
const sliderWrapper = document.querySelector('.slider-wrapper');

let isDragging = false;

sosCircle.addEventListener('mousedown', function() {
    isDragging = true;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        let rect = sliderWrapper.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;

        if (offsetX >= 0 && offsetX <= rect.width - sosCircle.offsetWidth) {
            sosCircle.style.left = offsetX + 'px';
        }

        if (offsetX >= rect.width - sosCircle.offsetWidth) {
            window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
        }
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Клик по всей странице
document.body.addEventListener('click', function() {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});
