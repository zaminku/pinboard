export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, pinId) => ({
    type: OPEN_MODAL,
    modal,
    pinId
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})