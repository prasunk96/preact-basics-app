import {h, Component} from 'preact';
import style from './style';

class Output extends Component {
    render(props, state) {
        return (
            <div>
                <div class={style.outputStyle}>
                    <div class={style.outputHeader}>
                        <hr class={style.hrStyle}/>
                        <div class={style.hrTextStyle}>
                            <h1>OUTPUT</h1>
                        </div>
                    </div>
                    <div>
                        <h2>Username:{props.userData.username}</h2>
                        <h2>Address:{props.userData.address}</h2>
                        <h2>Gender:{props.userData.gender}</h2>
                    </div>
                </div>
                <div class={style.outputStyle}>
                    <div class={style.outputHeader}>
                        <hr class={style.hrStyle}/>
                        <div class={style.hrTextStyle}>
                            <h1>OUTPUT</h1>
                        </div>
                    </div>
                    <div>
                        <h2>Todos:{props.userData.todo}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Output;