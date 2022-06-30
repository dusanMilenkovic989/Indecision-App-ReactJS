import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        optionSelected: undefined
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))

            if (options && options.length > 0) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }
    handlePickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length) 
        this.setState(() => ({ optionSelected: this.state.options[randomNum] }))
    }
    handleRemoveOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove) }))
    }
    handleAddOption = (option) => {
        if (option === '123!@#error123!@#') {
            return 'Please enter value in order to add item to the list'
        } else if (this.state.options.includes(option.toLowerCase())) {
            return 'This item has already been added to the list'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleRemoveModal = () => {
        this.setState(() => ({ optionSelected: undefined }))
    }
    render() {
        const subtitle = 'Let the software guide you'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action handlePickOption={this.handlePickOption} hasOptions={this.state.options.length > 0} />
                    <div className="widget">
                        <Options handleRemoveOptions={this.handleRemoveOptions} handleRemoveOption={this.handleRemoveOption} options={this.state.options} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal handleRemoveModal={this.handleRemoveModal} optionSelected={this.state.optionSelected} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export { IndecisionApp as default }