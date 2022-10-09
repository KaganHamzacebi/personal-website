import './projectModal.scss';
import {useEffect, useRef} from "react";
import useOutsideAlerter from "../../../../utils/useOutsideAlerter";

function ProjectModal({
                          props
                      }: any) {

    const modalRef = useRef(null);
    useOutsideAlerter(modalRef, props.setOpenModal);

    useEffect(() => {
        if (props.openModal) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
    }, [props])

    return (
        <div className={`projectModalMain ${props.openModal ? 'open' : 'close'}`}>
            <div ref={modalRef} className="modal-content">
                123
            </div>
        </div>
    )
}

export default ProjectModal;