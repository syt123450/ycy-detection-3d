import React, {Component} from 'react';
import '../css/Selector.css';
import Button from 'react-toolbox/lib/button/Button';

class Selector extends Component {
	
	state = {
		showSelector: false
	};
	
	show = () => {
		this.setState({
			showSelector: true,
		});
	};
	
	hide = () => {
		this.setState({
			showSelector: false,
		});
	};
	
	predict = () => {
	
	};
	
	render() {
		return (
			<div>
				{this.state.showSelector ?
					<div>
						<div className={"data-selector"}>
							<header>Select an Image to Predict</header>
							<main>
								<div>
									<img id="data1" alt="predict data" src="./assets/img/ycy_1.jpg" />
								</div>
								<div>
									<img id="data2" alt="predict data" src="./assets/img/ycy_1.jpg" />
								</div>
								<div>
									<img id="data3" alt="predict data" src="./assets/img/ycy_1.jpg" />
								</div>
								<div>
									<img id="data4" alt="predict data" src="./assets/img/ycy_1.jpg" />
								</div>
							</main>
							<footer>
								<Button className={"execute-predict"}
								        label={"Predict"}
								        raised
								        accent />
								<Button className={"cancel-predict"}
								        label={"Cancel"}
								        raised
								        accent
								        onClick={this.hide.bind(this)} />
							</footer>
						</div>
						<div id="selectorCurtain" onClick={this.hide.bind(this)} />
					</div>
				 : null}
			</div>
		
		);
	}
}

export {Selector};