import {h, Component} from 'preact';
import style from './style';
//import 'bootstrap/dist/css/bootstrap.min.css';

class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    onInputChnage = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    OnClickHandler(event, newUsername) {
        event.preventDefault();
        this.props.onUsernameChange(newUsername);
    }
    render(props,state) {
        return (
            <div>
                <div>
                    <h4>Username</h4>
                </div>
                <input class={[style.formStyle].join(' ')} type="text" onChange={this.onInputChnage}></input>
                <button class={style.textareaStyle} onClick={(event) => this.OnClickHandler(event, state.username)}>Submit</button>
            </div>
        )
    }
}

export default InputName;