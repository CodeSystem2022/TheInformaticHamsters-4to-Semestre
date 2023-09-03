const modalContainer =document.getElementById("modal_container");
const modalOverlay =document.getElementById("modal_overlay");

const displayCart = () => {
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose)
};