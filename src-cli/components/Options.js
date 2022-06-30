import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Conundrum</h3>
            {props.options.length > 0 && <button className="button button--text-only" onClick={props.handleRemoveOptions}>Remove All</button>}
        </div>
        {props.options.length ===0 && <p className="widget__message">Add conundrum to get started</p>}
        {props.options.map((option, index) => <Option key={option} option={option} index={index + 1} handleRemoveOption={props.handleRemoveOption} />)}
    </div>
)

export { Options as default }