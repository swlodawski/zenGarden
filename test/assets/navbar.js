const modalContainer = document.querySelector(".modal-container"); // Fixed typo: "modal-conatiner" to "modal-container"
const modalLogin = document.getElementById("modalLogin"); // Fixed typo: remove the dot
const create = document.getElementById("create");
const loginHere = document.getElementById("loginHere");
const loginForm = document.querySelector(".login");
const registrationForm = document.querySelector(".registration");
const closeModal = document.getElementById("closeModal");

closeModal.onclick = () => {
    closeModalContainer();
};

modalLogin.onclick = () => {
    modalContainer.classList.add("open");
};

function closeModalContainer() {
    modalContainer.classList.remove("open");
}

create.onclick = () => {
    loginForm.style.transform = "translate(-500px)";
    registrationForm.style.transform = "translate(0)";
};

loginHere.onclick = () => {
    loginForm.style.transform = ("style");
    registrationForm.style.transform = ("style"); // This was missing, assuming you want to move the registration form out of view.
};