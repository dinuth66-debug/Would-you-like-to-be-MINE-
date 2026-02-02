function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const noBtn = document.getElementById('noButton');
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    document.body.innerHTML = `
        <div style="text-align:center; background:white; padding:50px; border-radius:20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <h1 style="color:#ff4d6d;">I knew you'd say yes, Nimaya! 🥰</h1>
            <p style="font-size: 1.2em;">See you on the 14th! ❤️</p>
        </div>`;
}
