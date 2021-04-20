const initDashboardMob = () => {
  const btnMyGames = document.querySelector('.my-games-mob');
  const btnMyGamesBooking = document.querySelector('.my-games-booking-mob');
  const btnMyBooking = document.querySelector('.my-booking-mob');
  let active = document.querySelector('.active-red-mob');
  if (!btnMyGames) { return };

  btnMyGames.addEventListener('click', () => {
    document.getElementById('dash-my-games').classList.remove('d-none');
    document.getElementById('dash-my-games-bookings').classList.add('d-none');
    document.getElementById('dash-my-bookings').classList.add('d-none');
    btnMyGames.classList.add('active-red-mob');
    active.classList.remove('active-red-mob');
    active = document.querySelector('.active-red-mob');
  });

  btnMyGamesBooking.addEventListener('click', () => {
    document.getElementById('dash-my-games-bookings').classList.remove('d-none');
    document.getElementById('dash-my-bookings').classList.add('d-none');
    document.getElementById('dash-my-games').classList.add('d-none');
    btnMyGamesBooking.classList.add('active-red-mob');
    active.classList.remove('active-red-mob');
    active = document.querySelector('.active-red-mob');
  });

  btnMyBooking.addEventListener('click', () => {
    document.getElementById('dash-my-bookings').classList.remove('d-none');
    document.getElementById('dash-my-games-bookings').classList.add('d-none');
    document.getElementById('dash-my-games').classList.add('d-none');
    btnMyBooking.classList.add('active-red-mob');
    active.classList.remove('active-red-mob');
    active = document.querySelector('.active-red-mob');
  });

}

export { initDashboardMob };
