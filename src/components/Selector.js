/**
 * @author syt123450 / https://github.com/syt123450
 */

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
		const dataID = event.currentTarget.dataset.id;
		if (dataID !== this.state.selectedData) {
			this.setState({
				selectedData: dataID
			});
		}
		
	};
	
	render() {
		return (
			<div>
				{this.state.showSelector ?
					<div>
						<div className={"data-selector"}>
							<header>野生的超越们跳出来了 OωO</header>
							<main>
								<div>
									<img data-id="data1"
									     className={this.state.selectedData === "data1" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data1"].imageUrl}
									     onClick={this.handleSelect.bind(this)} />
								</div>
								<div>
									<img data-id="data2"
									     className={this.state.selectedData === "data2" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data2"].imageUrl}
									     onClick={this.handleSelect.bind(this)} />
								</div>
								<div>
									<img data-id="data3"
									     className={this.state.selectedData === "data3" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data3"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data4"
									     className={this.state.selectedData === "data4" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data4"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data5"
									     className={this.state.selectedData === "data5" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data5"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data6"
									     className={this.state.selectedData === "data6" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data6"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
								<div>
									<img data-id="data7"
									     className={this.state.selectedData === "data7" ?
										     "selected-item" : "unselected-item"}
									     alt="predict data"
									     src={DataLookup["data7"].imageUrl}
									     onClick={this.handleSelect.bind(this)}  />
								</div>
							</main>
							<footer>
								<Button className={"execute-predict"}
								        label={"就决定是你了！"}
								        raised
								        accent
								        onClick={this.predict.bind(this)} />
								<Button className={"cancel-predict"}
								        label={"好纠结 ＞﹏＜"}
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