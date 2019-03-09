/**
 * @author syt123450 / https://github.com/syt123450
 */

import React, {Component} from 'react';
import '../css/Loading.css';

class Loading extends Component {
	
	state = {
		showLoading: true,
		showDownLoadNotice: true,
		showCreationNotice: false,
		percentage: 0,
	};
	
	// fraction between 0 and 1.
	updateProgress = (fraction) => {
		this.setState({
			percentage: ( 100 * fraction ).toFixed(2),
		});
	};
	
	showCreation = () => {
		this.setState({
			showDownLoadNotice: false,
			showCreationNotice: true,
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
							<div className="download-notice">正在载入一个神经网络 <span
								className="download-progress">{this.state.percentage}%</span>
							</div> : null}
						{this.state.showCreationNotice ?
							<div>载入完毕！立即填装 3D 网络模型...</div> : null}
					</div>
					<img className={'loading'} alt="loading"
					     src="./assets/img/loading.gif"/>
				</div> : null}
			</div>
		
		);
	}
}

export {Loading};