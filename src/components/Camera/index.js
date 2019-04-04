// import React from "react";
// import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import visionApi from "../../actions/Aioutput";
import "./index.css";

// class CameraComponent extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.cameraPhoto = null;
//     this.videoRef = React.createRef();
//     this.state = {
//       dataUri: ""
//     };
//   }

//   componentDidMount() {
//     this.cameraPhoto = new CameraPhoto(this.videoRef.current);
//     let facingMode = FACING_MODES.ENVIRONMENT;
//     let idealResolution = { width: 640, height: 480 };
//     this.startCamera(facingMode, idealResolution);
//   }

//   startCamera(idealFacingMode, idealResolution) {
//     this.cameraPhoto
//       .startCamera(idealFacingMode, idealResolution)
//       .catch(err => {
//         alert("camera not available for the device");
//         this.props.history.push("/");
//       });
//   }

//   startCameraMaxResolution(idealFacingMode) {
//     this.cameraPhoto.startCameraMaxResolution(idealFacingMode);
//   }

//   takePhoto() {
//     const config = {
//       sizeFactor: 1
//     };

//     let dataUri = this.cameraPhoto.getDataUri(config);
//     this.setState({ dataUri }, () => {
//       this.props
//         .visionApi(this.state.dataUri)
//         .then(res => {
//           this.props.history.push("/searchOutput");
//           this.stopCamera();
//         })
//         .catch(() => this.props.history.push("/searchOutput"));
//     });
//   }

//   stopCamera() {
//     this.cameraPhoto
//       .stopCamera()
//       .then(() => {
//         this.props.toggleDialog();
//       })
//       .catch(err => {
//         this.props.toggleDialog();
//       });
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <div className="takePhotoBtnDiv">
//             <button
//               className="takePhotoBtn"
//               onClick={() => {
//                 this.takePhoto();
//               }}
//             >
//               Take Photo
//             </button>
//           </div>
//           <div style={{ textAlign: "right", padding: "5px" }}>
//             <button
//               className="closeCameraBtn"
//               onClick={() => {
//                 this.stopCamera();
//               }}
//             >
//               x
//             </button>
//           </div>
//         </div>
//         <video ref={this.videoRef} autoPlay={true} />
//         <img alt="imgCamera" src={this.state.dataUri} />
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { visionApi }
// )(withRouter(CameraComponent));

import React, { Component } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class CameraComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onCameraStop = this.onCameraStop.bind(this);
    this.onTakePhoto = this.onTakePhoto.bind(this);
    this.onCameraError = this.onCameraError.bind(this);
    this.onCameraStart = this.onCameraStart.bind(this);
  }
  onTakePhoto(dataUri) {
    this.props
      .visionApi(dataUri)
      .then(res => {
        this.props.history.push("/searchOutput");
        this.onCameraStop();
      })
      .catch(() => this.props.history.push("/searchOutput"));
  }

  onCameraError(error) {
    console.error("onCameraError", error);
  }

  onCameraStart(stream) {
    console.log("onCameraStart");
  }

  onCameraStop() {
    console.log("onCameraStop");
    this.props.toggleDialog();
  }

  render() {
    return (
      <div className="App">
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
          onCameraError={error => {
            this.onCameraError(error);
          }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{ width: 640, height: 480 }}
          imageType={IMAGE_TYPES.PNG}
          imageCompression={0.97}
          isMaxResolution={false}
          isImageMirror={false}
          isDisplayStartCameraError={true}
          sizeFactor={1}
          onCameraStart={stream => {
            this.onCameraStart(stream);
          }}
          onCameraStop={() => {
            this.onCameraStop();
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { visionApi }
)(withRouter(CameraComponent));
