import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CameraThirdParty from 'react-html5-camera-photo';
import { withRouter } from 'react-router-dom';
import visionApi from '../../actions/Aioutput';
import './index.css';

class CameraComponent extends React.Component {
	state = {
		open: this.props.open
	};
	onTakePhoto = (image) => {
		visionApi(image).then(() => this.props.history.push('/searchOutput'));
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<div>
				<Dialog open={this.state.open}>
					<CameraThirdParty
						onTakePhoto={(dataUri) => {
							this.onTakePhoto(dataUri);
						}}
					/>
					<button onClick={this.handleClose} className="close-btn">
						close camera
					</button>
				</Dialog>
			</div>
		);
	}
}

export default withRouter(CameraComponent);
