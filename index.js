const form = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault() // prevent the default behaviour
}

form.addEventListener('submit', handleSubmit);



const mainButton = document.getElementById("main-cta");
const mainModal = document.getElementById("modal");
const confModal = document.getElementById("confirmation");
const dismissButton = document.getElementById("dismiss-btn");

mainButton.addEventListener("click", function () {
  mainModal.classList.toggle("visible");
  
});
