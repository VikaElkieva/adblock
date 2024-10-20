
// Словарь переводов для 10 самых популярных языков (без русского)
const translations = {
    en: {
        heading: "Your iPhone has been hacked!",
        description: "A hacker is monitoring all your activities. Immediate action is required!<br>&nbsp;&nbsp;To protect your device, move the slider to activate <strong>AdBlock</strong> protection.",
        download: "Download AdBlock",
        cancel: "Cancel"
    },
    zh: {
        heading: "您的iPhone已被黑客入侵！",
        description: "黑客正在监视您的所有活动。 需要立即采取行动！<br>&nbsp;&nbsp;为了保护您的设备，请移动滑块以激活<strong>AdBlock</strong>保护。",
        download: "下载AdBlock",
        cancel: "取消"
    },
    es: {
        heading: "¡Tu iPhone ha sido hackeado!",
        description: "Un hacker está monitoreando todas tus actividades. ¡Se requiere acción inmediata!<br>&nbsp;&nbsp;Para proteger tu dispositivo, mueve el control deslizante para activar la protección de <strong>AdBlock</strong>.",
        download: "Descargar AdBlock",
        cancel: "Cancelar"
    },
    ar: {
        heading: "تم اختراق جهاز iPhone الخاص بك!",
        description: "هناك مخترق يتتبع جميع أنشطتك. الإجراء الفوري مطلوب!<br>&nbsp;&nbsp;لحماية جهازك، حرك شريط التمرير لتفعيل حماية <strong>AdBlock</strong>.",
        download: "تحميل AdBlock",
        cancel: "إلغاء"
    },
    fr: {
        heading: "Votre iPhone a été piraté !",
        description: "Un hacker surveille toutes vos activités. Une action immédiate est requise !<br>&nbsp;&nbsp;Pour protéger votre appareil, déplacez le curseur pour activer la protection <strong>AdBlock</strong>.",
        download: "Télécharger AdBlock",
        cancel: "Annuler"
    },
    pt: {
        heading: "Seu iPhone foi hackeado!",
        description: "Um hacker está monitorando todas as suas atividades. Ação imediata é necessária!<br>&nbsp;&nbsp;Para proteger seu dispositivo, mova o controle deslizante para ativar a proteção do <strong>AdBlock</strong>.",
        download: "Baixar AdBlock",
        cancel: "Cancelar"
    },
    de: {
        heading: "Ihr iPhone wurde gehackt!",
        description: "Ein Hacker überwacht alle Ihre Aktivitäten. Sofortiges Handeln ist erforderlich!<br>&nbsp;&nbsp;Um Ihr Gerät zu schützen, bewegen Sie den Schieberegler, um den <strong>AdBlock</strong>-Schutz zu aktivieren.",
        download: "AdBlock herunterladen",
        cancel: "Abbrechen"
    },
    ja: {
        heading: "あなたのiPhoneはハッキングされました！",
        description: "ハッカーがあなたのすべての活動を監視しています。 直ちに行動が必要です！<br>&nbsp;&nbsp;デバイスを保護するには、スライダーを移動して<strong>AdBlock</strong>保護を有効にします。",
        download: "AdBlockをダウンロード",
        cancel: "キャンセル"
    },
    hi: {
        heading: "आपका iPhone हैक कर लिया गया है!",
        description: "एक हैकर आपकी सभी गतिविधियों की निगरानी कर रहा है। तुरंत कार्रवाई की आवश्यकता है!<br>&nbsp;&nbsp;अपने डिवाइस की सुरक्षा के लिए, स्लाइडर को खींचकर <strong>AdBlock</strong> सुरक्षा सक्रिय करें।",
        download: "AdBlock डाउनलोड करें",
        cancel: "रद्द करें"
    },
    it: {
        heading: "Il tuo iPhone è stato hackerato!",
        description: "Un hacker sta monitorando tutte le tue attività. È richiesta un'azione immediata!<br>&nbsp;&nbsp;Per proteggere il tuo dispositivo, sposta il cursore per attivare la protezione <strong>AdBlock</strong>.",
        download: "Scarica AdBlock",
        cancel: "Annulla"
    }
};

// Определение языка пользователя
let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.split('-')[0];

// Установка языка по умолчанию
if (!translations[userLang]) {
    userLang = 'en';
}

// Перевод страницы на основе языка пользователя
function translatePage() {
    const translatedDescription = translations[userLang].description;
    document.querySelector('#main-title').textContent = translations[userLang].heading;
    document.querySelector('#description').innerHTML = translatedDescription;
    document.querySelector('.cancel-button').textContent = translations[userLang].cancel;
}

// Событие клика по всей странице
document.addEventListener('click', function(event) {
    if (!event.target.closest('.cancel-button') && !event.target.closest('.sos-circle')) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
});

// Автоматическое движение ползунка
const slider = document.querySelector('.sos-circle');
slider.addEventListener('mousedown', startSliderMove);
slider.addEventListener('touchstart', startSliderMove);

function startSliderMove() {
    slider.classList.add('animate');
    slider.style.transition = 'left 1.2s ease'; // Более быстрая анимация
    slider.style.left = '175px'; // Движение до конца
    setTimeout(() => {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }, 1200); // Переход после завершения анимации
}

// Перевод страницы при загрузке
document.addEventListener('DOMContentLoaded', translatePage);
