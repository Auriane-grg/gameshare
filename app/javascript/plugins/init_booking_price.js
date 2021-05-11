const initBookingPrice = () => {
  const price = document.getElementById('total-price');
  if (!price) { return };

  const start = document.getElementById('booking_start');
  let startDate = start.value;
  const end = document.getElementById('booking_end');
  let endDate = end.value;
  const startPrice = parseInt(document.getElementById('start-price').innerText);
  const dayCount = document.getElementById('day-count');
  let days = Math.ceil(((Date.parse(endDate) - Date.parse(startDate))+1)/86400000.2);
  let totalPrice = days * startPrice;

  start.addEventListener('change', () => {
    startDate = start.value;
    days = Math.ceil(((Date.parse(endDate) - Date.parse(startDate))+1)/86400000.2);
    if (days <= 0) {
      end.value = start.value;
      days = 1;
      document.getElementById('start-price').innerText = totalPrice;
      dayCount.innerText= days; 
    }
  });

  end.addEventListener('change', () => {
    endDate = end.value;
    days = Math.ceil(((Date.parse(endDate) - Date.parse(startDate))+1)/86400000.2);
    if (days <= 0) {
      start.value = end.value;
      days = 1;
      totalPrice = startPrice;
    }
    totalPrice = days * startPrice;
    document.getElementById('start-price').innerText = totalPrice;
    dayCount.innerText= days; 
  });

}

export { initBookingPrice };