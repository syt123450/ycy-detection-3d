import React, {Component} from 'react';
import '../css/Selector.css';
import Button from 'react-toolbox/lib/button/Button';
import { DataLookup } from '../utils/dataLookup';
import {INIT_DATA} from '../utils/Constant';

class Selector extends Component {
	
	state = {
		showSelector: false,
		selectedData: INIT_DATA
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
		this.props.panel.current.updatePanelImage(this.state.selectedData);
		this.props.model.current.predict(this.state.selectedData);
		this.setState({
			showSelector: false,
		});
	};
	
	handleSelect = (event) => {
		this.setState({
			selectedData: event.currentTarget.dataset.id
		});
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
									<img data-id="data1"
									     alt="predict data"
									     src={DataLookup["data1"].imageUrl}
									     onClick={this.handleSelect.bind(this)} />
								</div>
								<div>
									<img data-id="data2"
									     alt="predict data"
									     src={DataLookup["data2"].imageUrl}
									     onClick={this.handleSelect.bind(this)} />
								</div>
								<div>
									<img data-id="data3"
									     alt="predict data"
									     src={DataLookup["data3"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data4"
									     alt="predict data"
									     src={DataLookup["data4"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data5"
									     alt="predict data"
									     src={DataLookup["data5"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data6"
									     alt="predict data"
									     src={DataLookup["data6"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data7"
									     alt="predict data"
									     src={DataLookup["data7"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
							</main>
							<footer>
								<Button className={"execute-predict"}
								        label={"Predict"}
								        raised
								        accent
								        onClick={this.predict.bind(this)} />
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