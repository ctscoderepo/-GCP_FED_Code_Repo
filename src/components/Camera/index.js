import React from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import visionApi from '../../actions/Aioutput';
import './index.css';

class CameraComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.cameraPhoto = null;
		this.videoRef = React.createRef();
		this.state = {
			dataUri: ''
		};
	}

	componentDidMount() {
		this.cameraPhoto = new CameraPhoto(this.videoRef.current);
		let facingMode = FACING_MODES.ENVIRONMENT;
		let idealResolution = { width: 640, height: 480 };
		this.startCamera(facingMode, idealResolution);
	}

	startCamera(idealFacingMode, idealResolution) {
		this.cameraPhoto.startCamera(idealFacingMode, idealResolution).catch((err) => {
			alert('camera not available for the device');
			this.props.history.push('/');
		});
	}

	startCameraMaxResolution(idealFacingMode) {
		this.cameraPhoto.startCameraMaxResolution(idealFacingMode);
	}

	takePhoto() {
		const config = {
			sizeFactor: 1
		};

		let dataUri = this.cameraPhoto.getDataUri(config);
		this.setState({ dataUri }, () => {
			this.props.visionApi(this.state.dataUri).then((res) => {
				this.props.history.push('/searchOutput');
				this.stopCamera();
			});
		});
	}

	stopCamera() {
		this.cameraPhoto
			.stopCamera()
			.then(() => {
				this.props.history.push('/');
				this.props.toggleDialog();
			})
			.catch((err) => {
				this.props.history.push('/');
				this.props.toggleDialog();
			});
	}

	render() {
		return (
			<div>
				<div className="camera-icon">
					<div className="take-photo">
						<button
							onClick={() => {
								this.takePhoto();
							}}
						>
							Take photo
						</button>
					</div>
					<div className="close-photo">
						<button
							onClick={() => {
								this.stopCamera();
							}}
						>
							x
						</button>
					</div>
				</div>
				<video ref={this.videoRef} autoPlay={true} />
				<img alt="imgCamera" src={this.state.dataUri} />
			</div>
		);
	}
}

export default connect(null, { visionApi })(withRouter(CameraComponent));
