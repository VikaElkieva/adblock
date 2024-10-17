const sliderThumb = document.querySelector("#sos-circle");
const sliderTrack = document.querySelector(".slider-wrapper");
const container = document.querySelector("#container");
let isDragging = false;

// Функция определения языка
const languages = {
    en: {title: "Your iPhone has been hacked!", description: "A hacker is monitoring all your activities. Immediate action is required! To protect your device, move the slider to activate AdBlock protection."},
    es: {title: "¡Tu iPhone ha sido hackeado!", description: "Un hacker está monitoreando todas tus actividades. ¡Se requiere acción inmediata! Para proteger tu dispositivo, mueve el control deslizante para activar la protección de AdBlock."},
    zh: {title: "您的 iPhone 已被黑客入侵！", description: "黑客正在监视您的所有活动。需要立即采取行动！为了保护您的设备，请移动滑块以激活 AdBlock 保护。"},
    ar: {title: "تم اختراق جهاز iPhone الخاص بك!", description: "يقوم أحد المتسللين بمراقبة جميع أنشطتك. الإجراء الفوري مطلوب! لحماية جهازك، حرك شريط التمرير لتنشيط حماية AdBlock."},
    fr: {title: "Votre iPhone a été piraté !", description: "Un hacker surveille toutes vos activités. Une action immédiate est requise ! Pour protéger votre appareil, déplacez le curseur pour activer la protection AdBlock."},
    de: {title: "Dein iPhone wurde gehackt!", description: "Ein Hacker überwacht all deine Aktivitäten. Sofortiges Handeln ist erforderlich! Um dein Gerät zu schützen, bewege den Schieberegler, um den AdBlock-Schutz zu aktivieren."},
    pt: {title: "Seu iPhone foi hackeado!", description: "Um hacker está monitorando todas as suas atividades. Ação imediata é necessária! Para proteger seu dispositivo, mova o controle deslizante para ativar a proteção do AdBlock."},
    hi: {title: "आपका iPhone हैक हो गया है!", description: "एक हैकर आपकी सभी गतिविधियों की निगरानी कर रहा है। त्वरित कार्रवाई की आवश्यकता है! अपने डिवाइस की सुरक्षा के लिए, AdBlock सुरक्षा को सक्रिय करने के लिए स्लाइडर को स्थानांतरित करें।"},
    ja: {title: "あなたのiPhoneはハッキングされました！", description: "ハッカーがすべての活動を監視しています。すぐに対応が必要です！デバイスを保護するために、スライダーを動かしてAdBlock保護を有効にします。"},
    it: {title: "Il tuo iPhone è stato hackerato!", description: "Un hacker sta monitorando tutte le tue attività. È richiesta un'azione immediata! Per proteggere il tuo dispositivo, sposta il cursore per attivare la protezione di AdBlock."}
};

function translatePage() {
    const userLang = navigator.language.substring(0, 2);
    const translation = languages[userLang] || languages['en'];
    document.getElementById("main-title").textContent = translation.title;
    document.getElementById("description").textContent = translation.description;
}

// Обработка события клика по всей странице
container.addEventListener("click", () => {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});

// Обработка перетаскивания ползунка
sliderThumb.addEventListener("mousedown", startDrag);
sliderThumb.addEventListener("touchstart", startDrag);

function startDrag(e) {
    isDragging = true;
    document.body.style.cursor = "grabbing";
    e.preventDefault();
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

    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > trackRect.width - sliderThumb.offsetWidth) {
        newLeft = trackRect.width - sliderThumb.offsetWidth;
    }

    sliderThumb.style.left = newLeft + "px";

    if (newLeft >= trackRect.width - sliderThumb.offsetWidth) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
}

document.addEventListener("mouseup", stopDrag);
document.addEventListener("touchend", stopDrag);

function stopDrag() {
    isDragging = false;
    document.body.style.cursor = "default";
}

// Вызов функции перевода страницы
translatePage();
