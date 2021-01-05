import React from "react";

/**
 * An example Class Component, considered legacy for React in todays world.
 *
 * ExampleFunctionalComponent is its Functional equivalent and preferred.
 */
export default class ExampleClassComponent extends React.Component {

    // constructor with state
    constructor(props) {
        super(props);

        // function binding goes here
        this.handleInputText = this.handleInputText.bind(this);

        this.state = {
            inputText: ''
        }
    }

    // ------------------functions-----------------------

    componentDidMount() {
        console.log('class render complete!');
    }

    // Event handler for setting title
    handleInputText(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Class component sample</h1>
                <label htmlFor="classComponentInput">type to change the state: </label>
                <input id="classComponentInput" type="text" onChange={this.handleInputText}/>
                <p><b>inputText state:</b> {this.state.inputText}</p>
            </div>
        );
    }
}