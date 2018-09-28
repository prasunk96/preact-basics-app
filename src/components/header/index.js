import { h, Component } from 'preact';
import style from './style';

class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
					<a href="/">Home</a>
					<a href="/username">Username</a>
					<a href="/address">Address</a>
					<a href="/gender">Gender</a>
				</nav>
			</header>
		)
	}
}
export default Header;
