import React from 'react'

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.index}. {props.option}</p>
        <button 
            className="button button--text-only"
            onClick={(e) => {
                props.handleRemoveOption(props.option)
            }}
        >Remove</button>
    </div>
)

export { Option as default }