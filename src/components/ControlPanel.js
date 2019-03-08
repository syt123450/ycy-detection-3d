import React, {Component} from 'react';
import '../css/ControlPanel.css';
import Button from 'react-toolbox/lib/button/Button';

class ControlPanel extends Component {
	
	state = {
	
	};
	
	componentDidMount() {
		
		let context = this;
		
		let img = new Image();
		img.onload = function () {
			
			context.drawImage(img);
			
		};
		img.src = "./assets/img/ycy_1.jpg";
		
	}
	
	drawImage = (img) => {
		
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
	
	render() {
		return (
			<div id="controlPanel">
				
				<div className="panelTitle">YOLOv2-Tiny</div>
				
				<canvas id="predictionResult" width="208" height="208" />
				
				<Button className={"select-trigger"}
				        icon='add_photo_alternate'
				        label={"Select"}
				        raised
				        accent />
				<Button className={"reset-trigger"}
				        icon='replay'
				        label={"Reset"}
				        raised
				        accent />
				
			</div>
		
		);
	}
}

export {ControlPanel};