const adLinks = [
    "https://www.effectivegatecpm.com/szaxcfckwf?key=16135805dc97698328fbcff487238624",
    "https://omg10.com/4/10716564"
];
let clickCount = 0;
const femaleNames = ["Maria", "Ana", "Alice", "Helena", "Valentina", "Fernanda", "Juliana", "Sophia", "Amanda", "Letícia"];

// --- REFINED AD LOGIC ---
window.trackAdClick = function() {
    clickCount++;
    // Opens an ad on the 1st, 4th, 7th... click
    if (clickCount % 3 === 1) {
        const ad = adLinks[Math.floor(Math.random() * adLinks.length)];
        window.open(ad, '_blank');
    }
};

function createCard() {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    const imgUrl = `img/foto${randomNum}.jpg`; 
    const backupUrl = `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400`;
    const name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${imgUrl}" onerror="this.onerror=null; this.src='${backupUrl}';">
        <div class="card-info">
            <h2>${name}, 22</h2>
            <p>Online agora</p>
        </div>`;
    return card;
}

window.swipe = function(isLike) {
    const stack = document.getElementById('card-stack');
    const cards = stack.querySelectorAll('.card');
    const topCard = cards[cards.length - 1];
    if (!topCard) return;

    topCard.style.transform = isLike ? "translateX(200%) rotate(30deg)" : "translateX(-200%) rotate(-30deg)";
    topCard.style.opacity = "0";
    
    setTimeout(() => {
        topCard.remove();
        stack.prepend(createCard());
    }, 400);
};

window.showView = function(id, navEl) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + id).classList.add('active');
    if (navEl) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navEl.classList.add('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const stack = document.getElementById('card-stack');
    if (stack) {
        for (let i = 0; i < 3; i++) {
            stack.prepend(createCard());
        }
    }
});
