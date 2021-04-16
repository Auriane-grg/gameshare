const initBookingPop = () => {
  const popup = document.getElementById('popup-frame');
  const btn = document.querySelector('.btn-inside');
  const close = document.querySelector('.fa-times')
  if (!btn) { return };

  btn.addEventListener('click', () => {
    popup.style.display = "block"
    btn.classList.add('d-none')
  });

  close.addEventListener('click', () => {
    popup.style.display = "none"
    btn.classList.remove('d-none')
  });
}

export { initBookingPop };