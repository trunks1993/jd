import React from 'react';

// export default class Home extends Component {
//     constructor(props) {
// 		super(props);
// 		this.state = {
// 			username: '123',
// 			password: '',
// 			hiddenDiv: true
// 		}
//     }

// 	handlerChange() {
// 		this.setState(state => ({hiddenDiv: !state.hiddenDiv}))
// 	}
// 	handlerChangePwd() {}

//     render() {
//         return (
//         	<>
// 	            <Div hiddenDiv={this.state.hiddenDiv} />
// 	            <button onClick={this.handlerChange.bind(this)}>点击</button>
//             </>
//         )
//     }
// }

function Div(props) {
	return props.hiddenDiv ? <div class="">111</div> : ''
}