import React from 'react'

const Action = (props) => (
    <div>
        <button className="main-button" disabled={!props.hasOptions} onClick={props.handlePickOption}>Choose your destiny</button>
    </div>
)

export { Action as default }