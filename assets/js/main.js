function darkMode(e) {
    
    const x = e.clientX;
    const y = e.clientY;
    
    const overlay = document.querySelector('.overlay');
    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffee0011, #000 25%)`;
}

document.addEventListener('mousemove', darkMode);
