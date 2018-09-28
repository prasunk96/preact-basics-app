import { h, Component, render } from 'preact'; /** @jsx h */
import { Router, route } from 'preact-router';
import {HashRouter, Link, Route} from 'react-router-dom';
import style from './style';
import InputName from '../inputName';
import Address from '../address';
import Gender from '../gender';
import Output from '../output';
import ConditionalRender from '../conditionalRendering';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            address: '',
            gender: '',
            isLoaded: false,
            error: null,
            todo: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                todo: result.title
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
    )
    }
    handleInputChange = (newUsername) => {
        this.setState({
            username:  newUsername
        })
    }
    handleAddressChange = (newAddress) => {
        this.setState({
            address: newAddress
        })
    }
    handleGenderChange = (newGender) => {
        this.setState({
            gender:  newGender
        })
    }
    handleConditionlRendering = () => {
        this.setState({
            username: '',
            address: '',
            gender: ''
        })
    }
    render(props,state) {
        return (state.username==='prasun' || state.username==='') ? (
        (
            <div>
                <form class={style.formStyle}>
                    <Router>
                        <InputName path="/username" onUsernameChange={this.handleInputChange}/>
                        <Address path="/address" onAddressChange={this.handleAddressChange}/>
                        <Gender path="/gender" onGenderChange={this.handleGenderChange}/>
                        <Output path="/" userData={state}/>
                    </Router> 
                </form>
            </div>
        )
        ) : (
            <div>
                <ConditionalRender>{this.handleConditionlRendering}</ConditionalRender>
            </div>
        )
    }
}

export default Form;