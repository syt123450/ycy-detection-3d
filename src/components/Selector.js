import React, {Component} from 'react';
import '../css/Selector.css';
import Button from 'react-toolbox/lib/button/Button';

class Selector extends Component {
	
	state = {
		showLoading: true
	};
	
	render() {
		return (
			<div>
				<div className={"data-selector"}>
					<header>Select an Image to Predict</header>
					<main>
						<div>
							<img id="data1" src="./assets/img/ycy_1.jpg" />
						</div>
						<div>
							<img id="data2" src="./assets/img/ycy_1.jpg" />
						</div>
						<div>
							<img id="data3" src="./assets/img/ycy_1.jpg" />
						</div>
						<div>
							<img id="data4" src="./assets/img/ycy_1.jpg" />
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
						        accent />
					</footer>
				</div>
			</div>
		
		);
	}
}

export {Selector};