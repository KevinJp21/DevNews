// Script para activar y desactivar el modo oscuro
const DarkModeOn = document.getElementById('DarkModeOn');
DarkModeOn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
});

const LightModeOn = document.getElementById('LightModeOn');
LightModeOn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
});

