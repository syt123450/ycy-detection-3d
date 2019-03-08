/**
 * @author syt123450 / https://github.com/syt123450
 */

import React, {Component} from 'react';
import '../css/ControlPanel.css';
import Button from 'react-toolbox/lib/button/Button';
import {DataLookup} from '../utils/dataLookup';
import {INIT_DATA} from '../utils/Constant';

class ControlPanel extends Component {
	
	componentDidMount() {
		
		this.drawImage(INIT_DATA);
		
	}
	
	showSelector = () => {
		this.props.selector.current.show();
	};
	
	drawImage = (dataID) => {
		
		let img = new Image();
		img.onload = function () {
			
			let context = document.getElementById( "predictionResult" ).getContext( "2d" );
			
			context.clearRect( 0, 0, 208, 208 );
			
			context.drawImage( img, 0, 0 );
			
			let dataArray = context.getImageData( 0, 0, 208, 208 ).data;
			
			let array = [];
			
			for ( let i = 0; i < dataArray.length; i ++ ) {
				
				if ( i % 4 !== 3 ) {
					
					array.push( ( dataArray[ i ] / 255 ).toFixed( 4 ) );
					
				}
				
			}
			
		};
		img.src = DataLookup[dataID].imageUrl;
		
	};
	
	drawPrediction = (boxes) => {
		
		let ctx = document.getElementById( "predictionResult" ).getContext( "2d" );
		
		for ( let i = 0; i < boxes.length; i ++ ) {
			
			let rectParameter = boxes[ i ];
			
			ctx.beginPath();
			
			ctx.rect(
				
				rectParameter.x / 2,
				rectParameter.y / 2,
				rectParameter.width / 2,
				rectParameter.height / 2
			
			);
			
			ctx.stroke();
			
		}
		
	};
	
	updatePanelImage = (dataID) => {
		this.drawImage(dataID);
	};
	
	reset = () => {
		this.props.model.current.reset();
	};
	
	render() {
		return (
			<div id="controlPanel">
				
				<div className={"panelTitle"}>如何优雅地捕捉超越？</div>
				<div className={"sub-title"}>—— 3D神经网络 ——</div>
				
				<canvas id="predictionResult" width="208" height="208" />
				
				<Button className={"select-trigger"}
				        icon='add_photo_alternate'
				        label={"新的超越"}
				        raised
				        accent
				        onClick={this.showSelector.bind(this)} />
				<Button className={"reset-trigger"}
				        icon='replay'
				        label={"我想静静"}
				        raised
				        accent
				        onClick={this.reset.bind(this)} />
				
			</div>
		
		);
	}
}

export {ControlPanel};