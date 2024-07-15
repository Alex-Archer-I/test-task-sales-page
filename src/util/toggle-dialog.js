const toggleDialog = (ref) => {
    if (!ref.current) {
        return;
    };

    //document.querySelector('body').classList.toggle('overflow');

    ref.current.hasAttribute("open") ?
        ref.current.close() :
        ref.current.showModal();
};

export default toggleDialog;