import React, {useRef, useState, useCallback} from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss"
import Webcam from "react-webcam";
import { Rnd } from "react-rnd"


const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}
        </>
    );
};


const App = () => (
    <>
            <WebcamCapture />
            <Rnd default={{
                x:40,
                y:600,
                width: 200,
                height: 200,
            }}
                 minWidth={200}
                 minHeight={200}
                 bounds="window">
                <img style={{width:"100%", height:"100%"}} src="./images/Sloneczniki_Van_Gogh.jpg" />
            </Rnd>
    </>

)


ReactDOM.render(<App/>, document.getElementById("app"));
