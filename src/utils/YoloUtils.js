/**
 * @author syt123450 / https://github.com/syt123450
 */


let scoreThreshold = 0.18;
let iouThreshold = 0.3;
let outputShape = [ 416, 416 ];
let gridShape = [ 13, 13 ];

let anchors =  [ 1.08, 1.19, 3.42, 4.41, 6.63, 11.38, 9.42, 5.11, 16.62, 10.52 ];

function sigmoid( x ) {
	
	return 1 / ( 1 + Math.pow( Math.E, - x ) );
	
}

function softmax( arr ) {
	
	const C = Math.max( ...arr );
	
	const d = arr.map( ( y ) => Math.exp( y - C ) ).reduce( ( a, b ) => a + b );
	
	return arr.map( ( value, index ) => {
		
		return Math.exp( value - C ) / d;
		
	} )
	
}

function sortBy(field) {
	
	return function(a,b) {
		
		return b[field] - a[field];
		
	}
	
}

function transferPrediction( prediction ) {
	
	let list = [];
	
	list.push( prediction["x"] );
	list.push( prediction["y"] );
	list.push( prediction["x"] + prediction["width"]);
	list.push( prediction["y"] + prediction["height"]);
	
	return list;
	
}

function iou( boxA, boxB ) {
	
	let xA = Math.max( boxA[0], boxB[0] );
	let yA = Math.max( boxA[1], boxB[1] );
	let xB = Math.min( boxA[2], boxB[2] );
	let yB = Math.min( boxA[3], boxB[3] );
	
	let intersectionArea = ( xB - xA + 1) * ( yB - yA + 1 );
	
	let boxAArea = ( boxA[2] - boxA[0] + 1 ) * ( boxA[3] - boxA[1] + 1 );
	let boxBArea = ( boxB[2] - boxB[0] + 1 ) * ( boxB[3] - boxB[1] + 1 );
	
	return intersectionArea / ( boxAArea + boxBArea - intersectionArea );
	
}

function nonMaximalSuppression( thresholdedPredictions, iouThreshold ){
	
	let nmsPredictions = [];
	
	nmsPredictions.push( thresholdedPredictions[0] );
	
	let i = 1;
	
	let toDelete = false;
	
	while ( i < thresholdedPredictions.length ) {
		
		let nBoxesToCheck = nmsPredictions.length;
		
		toDelete = false;
		
		let j = 0;
		
		while ( j < nBoxesToCheck ) {
			
			let boxA = transferPrediction( thresholdedPredictions[i] );
			
			let boxB = transferPrediction( nmsPredictions[j] );
			
			let curIOU = iou( boxA, boxB );
			
			if ( curIOU > iouThreshold ) {
				
				toDelete = true;
				
			}
			
			j++;
			
		}
		
		if ( toDelete === false )  {
			
			nmsPredictions.push( thresholdedPredictions[i] );
			
		}
		
		i++;
		
	}
	
	return nmsPredictions;
	
}

function getDetectionBox( outputData ) {
	
	let widthRange = gridShape[ 0 ];
	let heightRange = gridShape[ 1 ];
	
	let channelDepth = outputData.length / ( widthRange * heightRange );
	
	let thresholdedPredictions = [];
	
	for ( let row = 0; row < widthRange; row ++ ) {
		
		for ( let col = 0; col < heightRange; col ++ ) {
			
			let start = row * widthRange + col;
			
			let channelData = outputData.slice( start * channelDepth, ( start + 1 ) * channelDepth );
			
			let len = channelData.length / 5;
			
			for ( let box = 0; box < anchors.length / 2; box ++ ) {
				
				let index = box * len;
				let bx = ( sigmoid( channelData[ index ] ) + col );
				let by = ( sigmoid( channelData[ index + 1 ] ) + row );
				let bw = anchors[ box * 2 ] * Math.exp( channelData[ index + 2 ] );
				let bh = anchors[ box * 2 + 1 ] * Math.exp( channelData[ index + 3 ] );
				
				let finalConfidence = sigmoid( channelData[ index + 4 ] );
				
				let probability = channelData.slice( index + 5, index + len );
				
				let classPrediction = softmax( probability );
				
				let bestClassIndex = classPrediction.indexOf( Math.max( ...classPrediction ) );
				
				let bestClassScore = classPrediction[ bestClassIndex ];
				
				let finalScore = bestClassScore * finalConfidence;
				
				let width = bw / widthRange * outputShape[ 0 ];
				let height = bh  / heightRange * outputShape[ 1 ];
				let x = bx / widthRange * outputShape[ 0 ] - width / 2;
				let y = by / heightRange * outputShape[ 1 ] - height / 2;
				
				if ( finalScore > scoreThreshold ) {
					
					thresholdedPredictions.push( {
						
						"x": x,
						"y": y,
						"width": width,
						"height": height,
						"finalScore": finalScore
						
					} );
					
				}
				
			}
			
		}
		
	}
	
	thresholdedPredictions.sort( sortBy( "finalScore" ) );
	
	return nonMaximalSuppression( thresholdedPredictions, iouThreshold );
	
}

export { getDetectionBox };