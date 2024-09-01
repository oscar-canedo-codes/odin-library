/* SHOW AND HIDE THE MODAL */

function showModal() {
    const addBookModal = document.getElementById("modal");
    addBookModal.classList.remove('hidden');
}

function hideModal() {
    const addBookModal = document.getElementById("modal");
    addBookModal.classList.add('hidden');
}

module.exports = { showModal, hideModal };