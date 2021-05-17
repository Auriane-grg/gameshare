const initSortBooking = () => {
  const sortingFutureBtn = document.querySelector('.sorting-select');
  const sortingPreviousBtn = document.querySelector('.sorting-unselect');
  const futureBooking = document.querySelectorAll('.future-booking');
  const previousBooking = document.querySelectorAll('.previous-booking');

  if (!sortingFutureBtn) { return };

  sortingFutureBtn.addEventListener('click', () => {
    sortingFutureBtn.classList.add('sorting-select');
    sortingFutureBtn.classList.remove('sorting-unselect');
    sortingPreviousBtn.classList.remove('sorting-select');
    sortingPreviousBtn.classList.add('sorting-unselect');
 
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

  sortingPreviousBtn.addEventListener('click', () => {
    sortingPreviousBtn.classList.remove('sorting-unselect');
    sortingPreviousBtn.classList.add('sorting-select');
    sortingFutureBtn.classList.remove('sorting-select');
    sortingFutureBtn.classList.add('sorting-unselect');

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

export { initSortBooking };