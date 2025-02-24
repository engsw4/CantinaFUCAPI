// Bloquear scroll
function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Desbloquear scroll
function unlockScroll() {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
}

// Chamar a função para bloquear
lockScroll();