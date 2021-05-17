const initSortGameBooking = () => {
  const sortingFutureGameBtn = document.querySelector('.sorting-game-select');
  const sortingPreviousGameBtn = document.querySelector('.sorting-game-unselect');
  const futureBooking = document.querySelectorAll('.future-game-booking');
  const previousBooking = document.querySelectorAll('.previous-game-booking');

  if (!sortingFutureGameBtn) { return };

  sortingFutureGameBtn.addEventListener('click', () => {
    sortingFutureGameBtn.classList.add('sorting-game-select');
    sortingFutureGameBtn.classList.remove('sorting-game-unselect');
    sortingPreviousGameBtn.classList.remove('sorting-game-select');
    sortingPreviousGameBtn.classList.add('sorting-game-unselect');

    if (futureBooking != []) {
      futureBooking.forEach((booking) => {
        booking.classList.remove('d-none');
      });
    };

    if (previousBooking != []) {
      previousBooking.forEach((booking) => {
        booking.classList.add('d-none');
      });

    };
  });

  sortingPreviousGameBtn.addEventListener('click', () => {
    sortingPreviousGameBtn.classList.remove('sorting-game-unselect');
    sortingPreviousGameBtn.classList.add('sorting-game-select');
    sortingFutureGameBtn.classList.remove('sorting-game-select');
    sortingFutureGameBtn.classList.add('sorting-game-unselect');

    if (futureBooking != []) {
      futureBooking.forEach((booking) => {
        booking.classList.add('d-none');
      });
    };

    if (previousBooking != []) {
      previousBooking.forEach((booking) => {
        booking.classList.remove('d-none');
      });
    };
  });
}

export { initSortGameBooking };