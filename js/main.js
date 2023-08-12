// Script para activar y desactivar el modo oscuro
const DarkModeOn = document.getElementById('DarkModeOn');
DarkModeOn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('modo', 'oscuro');
});

const LightModeOn = document.getElementById('LightModeOn');
LightModeOn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('modo', 'claro');
});

// Verifica el modo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    document.body.classList.add('dark-mode');
  }
});
