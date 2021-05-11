const initBookingPrice = () => {
  const price = document.getElementById('total-price');
  if (!price) { return };

  const start = document.getElementById('booking_start');
  let startDate = start.value;
  const end = document.getElementById('booking_end');
  let endDate = end.value;
  const startPrice = parseInt(document.getElementById('start-price').innerText);
  const dayCount = document.getElementById('day-count');

  start.addEventListener('change', () => {
    startDate = start.value;
  });

  end.addEventListener('change', () => {
    endDate = end.value;
    let days = Math.ceil(((Date.parse(endDate) - Date.parse(startDate))+1)/86400000.2);
    let totalPrice = days * startPrice;
    document.getElementById('start-price').innerText = totalPrice;
    dayCount.innerText= days; 
  });

}

export { initBookingPrice };