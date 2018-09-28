import {h, Component} from 'preact';
import style from './style';

class Gender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: ''
        }
    }
    genderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    onClickHandler(event, newGender) {
        event.preventDefault();
        this.props.onGenderChange(newGender);
    }
    render(props,state) {
        return (
            <div>
                <div>
                    <h4>Gender</h4>
                </div>
                <input type="radio" value="male" name="gender" onClick={this.genderChange}></input>
                <span>Male</span>f
                <input type="radio" value="female" name="gender" onClick={this.genderChange}></input>
                <span>Female</span>
                <button class={style.genderStyle} onClick={(event) => this.onClickHandler(event, state.gender)}>Submit</button>
            </div>
        )
    }
}

export default Gender;