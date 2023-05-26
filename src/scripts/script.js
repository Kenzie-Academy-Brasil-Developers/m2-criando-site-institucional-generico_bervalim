function handleModal() {
  const registrationButtons = document.querySelectorAll(".button__container");
  const modalController = document.querySelector(".modal__controller");
  const modalInput = document.querySelector(".modal__input");

  for (let i = 0; i < registrationButtons.length; i++) {
    const registrationButton = registrationButtons[i];

    registrationButton.addEventListener("click", function () {
      modalController.showModal();
      closeModal();
      modalInput.value = "";
    });
  }
}

function closeModal() {
  const closeModalButton = document.querySelector(".modal__close");
  const modalController = document.querySelector(".modal__controller");

  closeModalButton.addEventListener("click", function () {
    modalController.close();
  });
}

handleModal();
