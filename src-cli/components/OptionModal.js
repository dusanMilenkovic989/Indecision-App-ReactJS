import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.optionSelected}
        onRequestClose={props.handleRemoveModal}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        {props.optionSelected && <h3 className="modal__title">You should get to:</h3>}
        {props.optionSelected && <p className="modal__body">{props.optionSelected}</p>}
        {props.optionSelected && <button className="button" onClick={props.handleRemoveModal}>Got it!</button>}
    </Modal>
)

export { OptionModal as default }