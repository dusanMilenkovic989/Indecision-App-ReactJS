import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        let error

        if (typeof option === 'string' && option.length > 0) {
            error = this.props.handleAddOption(option.toLowerCase())

        } else if (typeof option === 'string' && option.length === 0) {
            error = this.props.handleAddOption('123!@#error123!@#')
        }

        if (this.state.error !== error) {
            this.setState(() => ({ error }))
        }

        if (!error) {
            e.target.elements.option.value = ''
        }

        e.target.elements.option.focus()
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" placeholder="What's on your mind" name="option" />
                    <button className="button">Add to list</button>
                </form>
            </div>
        )
    }
}

export { AddOption as default }