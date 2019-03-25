import React from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { visionApi } from "../../actions/Search";

class WebcamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    //const imageSrc = this.webcam.getScreenshot(); // getScreenShot returns the base64 image
    const imageSrc =
      "gs://gcpimage/images/electronics/0000035_nikon-d5500-dslr_550.jpeg";
    this.passtoVisionApi(imageSrc);

    // Read the file into memory.

    {
      /*const imageSrc =
      "Users//756896//Desktop//GCPWork//images//appreals//0000064_ray-ban-aviator-sunglasses_550.jpg";

    var fs = require("fs");
    var bitmap = fs.readFileSync("sliderImages", "utf8");
    console.log("bitmap: ", bitmap);

    const image2base64 = require("image-to-base64");
    image2base64(imageSrc) // you can also to use url
      .then(encodedImageSrc => {
        console.log("encodedImageSrc: ", encodedImageSrc);
        this.passtoVisionApi(encodedImageSrc);
      });*/
    }
  };

  passtoVisionApi(encodedImageSrc) {
    this.props
      .visionApi(encodedImageSrc)
      .then(result => {
        this.setState({
          data: result.data
        });
      })
      .catch(err => {
        this.setState({
          data: []
        });
      });
  }

  render() {
    const videoConstraints = {
      width: 0,
      height: 0,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={30}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={30}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { visionApi }
)(withRouter(WebcamComponent));
