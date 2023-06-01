// Scroll down button
document.querySelector('#scroll-down-btn').addEventListener('click', function () {
  document.querySelector('#projects-title').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const cards = document.querySelectorAll('.card');
  const modal = document.querySelector('#myModal');
  const modalBody = modal.querySelector('.modal-body');
  let myModal;

  cards.forEach(card => {
    const maximiseBtn = card.querySelector('.maximise-btn');
    const maximiseBtnIcon = card.querySelector('.maximise-btn-icon');

    if (!maximiseBtn) {
      return;
    }

    maximiseBtn.addEventListener('click', () => {
      const cardContent = card.querySelector('.card-content').innerHTML;

      modalBody.innerHTML = cardContent;

      // If no modal exists, create one
      if (!myModal) {
        myModal = new bootstrap.Modal(modal);
      }

      // Toggle the modal
      myModal.toggle();

      // Hide the maximise buttons on the card
      maximiseBtn.classList.add('hidden');
      maximiseBtnIcon.classList.add('hidden');
    });

    const closeBtn = modal.querySelector('.close-modal-btn');

    // Close button
    closeBtn.addEventListener('click', () => {
      myModal.hide();

      // Show the maximise button
      maximiseBtn.classList.remove('hidden');
      maximiseBtnIcon.classList.remove('hidden');
    });
  });
});



