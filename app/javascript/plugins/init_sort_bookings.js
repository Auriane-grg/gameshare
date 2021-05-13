const initSortBooking = () => {
  const sorting_future_btn = document.querySelector('.sorting_select');
  const sorting_previous_btn = document.querySelector('.sorting_unselect');
  const future_booking = document.querySelector('.future-booking');
  const previous_booking = document.querySelector('.previous-booking');

  if (!sorting_future_btn) { return };

  sorting_future_btn.addEventListener('click', () => {
    sorting_future_btn.classList.add('sorting_select');
    sorting_future_btn.classList.remove('sorting_unselect');
    sorting_previous_btn.classList.remove('sorting_select');
    sorting_previous_btn.classList.add('sorting_unselect');
    if (future_booking) {
      future_booking.classList.remove('d-none');
    };
    if (previous_booking) {
    previous_booking.classList.add('d-none');
    };
  });

  sorting_previous_btn.addEventListener('click', () => {
    sorting_previous_btn.classList.remove('sorting_unselect');
    sorting_previous_btn.classList.add('sorting_select');
    sorting_future_btn.classList.remove('sorting_select');
    sorting_future_btn.classList.add('sorting_unselect');
    if (future_booking) {
      future_booking.classList.add('d-none');
    }
    if (previous_booking) {
    previous_booking.classList.remove('d-none');
    }
  });

}

export { initSortBooking };