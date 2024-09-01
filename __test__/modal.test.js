const { showModal, hideModal } = require('../src/test/modal');

describe('Modal Module', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="modal" class="hidden"></div>';
    });

    test('should show the modal', () => {
        showModal();
        expect(document.getElementById('modal').classList.contains('hidden')).toBe(false);
    });

    test('should hide the modal', () => {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
        hideModal();
        expect(modal.classList.contains('hidden')).toBe(true);
    });
});