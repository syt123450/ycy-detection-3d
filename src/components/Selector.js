import React, {Component} from 'react';
import '../css/Selector.css';

class Selector extends Component {
	
	state = {
		showLoading: true,
		showDownLoadNotice: true,
		showCreationNotice: false,
		percentage: 0
	};
	
	updateProgress = (fraction) => {
		this.setState({
			percentage: ( 100 * fraction ).toFixed(2),
		});
	};
	
	showCreation = () => {
		this.setState({
			showDownLoadNotice: false,
			showCreationNotice: true
		});
	};
	
	hideLoading = () => {
		this.setState({
			showLoading: false,
		});
	};
	
	render() {
		return (
			<div>
				{this.state.showLoading ? <div className="loading-pad">
					<div className="loading-label">
						{this.state.showDownLoadNotice ?
							<div className="download-notice">Downloading Deep
								Learning Model <span
									className="download-progress">{this.state.percentage}%</span>
							</div> : null}
						{this.state.showCreationNotice ?
							<div>Download completed!
								Creating 3D Neural Network...</div> : null}
					</div>
					<img className={"loading"} alt="loading" src="./assets/img/loading.gif"/>
				</div> : null}
			</div>
		
		);
	}
}

export {Selector};