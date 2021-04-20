const initDashboardBtn = () => {
  const btnMyGames = document.querySelector('.my-games-btn');
  const btnMyGamesBooking = document.querySelector('.my-games-booking-btn');
  const btnMyBooking = document.querySelector('.my-booking-btn');
  let active = document.querySelector('.active-red');
  if (!btnMyGames) { return };

  btnMyGames.addEventListener('click', () => {
    document.getElementById('dash-my-games').classList.remove('d-none');
    document.getElementById('dash-my-games-bookings').classList.add('d-none');
    document.getElementById('dash-my-bookings').classList.add('d-none');
    btnMyGames.classList.add('active-red');
    active.classList.remove('active-red');
    active = document.querySelector('.active-red');
  });

  btnMyGamesBooking.addEventListener('click', () => {
    document.getElementById('dash-my-games-bookings').classList.remove('d-none');
    document.getElementById('dash-my-bookings').classList.add('d-none');
    document.getElementById('dash-my-games').classList.add('d-none');
    btnMyGamesBooking.classList.add('active-red');
    active.classList.remove('active-red');
    active = document.querySelector('.active-red');
  });

  btnMyBooking.addEventListener('click', () => {
    document.getElementById('dash-my-bookings').classList.remove('d-none');
    document.getElementById('dash-my-games-bookings').classList.add('d-none');
    document.getElementById('dash-my-games').classList.add('d-none');
    btnMyBooking.classList.add('active-red');
    active.classList.remove('active-red');
    active = document.querySelector('.active-red');
  });

}

export { initDashboardBtn };
