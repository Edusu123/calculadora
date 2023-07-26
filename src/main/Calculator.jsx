import './Calculator.css'
import React, { Component } from "react";
import Button from "../components/Button";
import Display from '../components/Display';

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind()
        this.setOperation = this.setOperation.bind()
        this.addDigit = this.addDigit.bind()
    }

    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        return (
            // é importante usar "className" no react
            <div className="calculator">
                <Display value={100}></Display>
                <Button triple label="AC" click={this.clearMemory}></Button>
                <Button operation label="/" click={this.setOperation}></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button operation label="*" click={this.setOperation}></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button operation label="-" click={this.setOperation}></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button operation label="+" click={this.setOperation}></Button>
                <Button double label="0" click={this.addDigit}></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button operation label="=" click={this.setOperation}></Button>
            </div>
        )
    }
}
