const sliderThumb = document.querySelector(".slider-thumb-label");
const sliderTrack = document.querySelector(".slider-wrapper");
let isDragging = false;

// Начало перетаскивания
sliderThumb.addEventListener("mousedown", startDrag);
sliderThumb.addEventListener("touchstart", startDrag);

function startDrag(e) {
    isDragging = true;
    document.body.style.cursor = "grabbing";
    e.preventDefault(); // Отключаем нежелательные эффекты касания
}

// Перемещение ползунка
document.addEventListener("mousemove", dragSlider);
document.addEventListener("touchmove", function (e) {
    dragSlider(e.touches[0]);
});

function dragSlider(e) {
    if (!isDragging) return;
    
    const trackRect = sliderTrack.getBoundingClientRect();
    let newLeft = e.clientX - trackRect.left - sliderThumb.offsetWidth / 2;

    // Ограничение движения ползунка
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > trackRect.width - sliderThumb.offsetWidth) {
        newLeft = trackRect.width - sliderThumb.offsetWidth;
    }

    sliderThumb.style.left = newLeft + "px";

    // Если ползунок достигает конца, перенаправляем на страницу
    if (newLeft >= trackRect.width - sliderThumb.offsetWidth) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
}

// Завершение перетаскивания
document.addEventListener("mouseup", stopDrag);
document.addEventListener("touchend", stopDrag);

function stopDrag() {
    isDragging = false;
    document.body.style.cursor = "default";
}
