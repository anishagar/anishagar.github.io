function initEmailCopy() {
    const emailBtn = document.getElementById('email-btn');
    if (!emailBtn) return;

    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'anishemail3131@gmail.com';
        
        navigator.clipboard.writeText(email).then(() => {
            showCopiedMessage();
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopiedMessage();
        });
    });
}

function showCopiedMessage() {
    const emailBtn = document.getElementById('email-btn');
    if (!emailBtn) return;
    
    const existingMessage = document.querySelector('.copied-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'copied-message';
    message.textContent = 'copied!';
    
    emailBtn.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.add('fade-out');
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 200);
    }, 1800);
}

document.addEventListener('DOMContentLoaded', () => {
    initEmailCopy();
});