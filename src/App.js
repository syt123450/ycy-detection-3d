import React, {Component} from 'react';
import './App.css';
import * as TSP from 'tensorspace';

class App extends Component {
	
	componentDidMount() {
		
		let modelContainer = document.getElementById( "container" );

		let model = new TSP.models.Sequential( modelContainer, {

			stats: true,
			animeTime: 200

		}  );

		model.add( new TSP.layers.RGBInput( {

			shape: [ 416, 416, 3 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 16,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 2, 2 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 32,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 2, 2 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 64,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 2, 2 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 128,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 2, 2 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 256,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 2, 2 ]

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 512,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Pooling2d( {

			poolSize: [ 2, 2 ],
			strides: [ 1, 1 ],
			padding: "same"

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 1024,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 3,
			filters: 512,
			strides: 1,
			padding: "same"

		} ) );

		model.add( new TSP.layers.Conv2d( {

			kernelSize: 1,
			filters: 125,
			strides: 1

		} ) );

		model.load( {

			type: "tensorflow",
			url: "./assets/model/model.json",
			outputsName: [ "Maximum", "MaxPool", "Maximum_1", "MaxPool_1", "Maximum_2",
				"MaxPool_2", "Maximum_3", "MaxPool_3", "Maximum_4", "MaxPool_4",
				"Maximum_5", "MaxPool_5", "Maximum_6", "Maximum_7", "add_8" ],
		} );
		
		model.init( function() {

			fetch('./assets/data/ycy_1.json').then(res => res.json()).then(data => {
				model.predict(data);
			});

		} );
		
	}
	
	render() {
		return (
			<div id={'container'}>
			</div>
		);
	}
}

export default App;
