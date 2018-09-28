import {h, Component} from 'preact';
import style from './style';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }
    onInputChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    onClickHandler(event, newAddress) {
        event.preventDefault();
        this.props.onAddressChange(newAddress);
    } 
    render(props,state) {
        return (
            <div>
                <div>
                    <h4>Address</h4>
                </div>
                <textarea class={style.formStyle} onChange={this.onInputChange}></textarea>
                <button class={style.textareaStyle} onClick={(event) => this.onClickHandler(event, state.address)}>Submit</button>
            </div>
        )
    }
}

export default Address;