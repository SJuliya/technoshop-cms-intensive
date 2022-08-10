import { hidePreview } from "./previewController.js";
import { form } from "./elems.js";

const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen);
};

const closeModal = (modal, classOpen) => {
    modal.classList.remove(classOpen);
    form.reset();
    hidePreview();
};

export const modalController = ({ modal, btn, classOpen, classClose}) => {
    btn.addEventListener('click', () => {
        openModal(modal, classOpen);
    });

    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.classList.contains(classClose)) {
            closeModal(modal, classOpen);
        }
    });
};