import React from "react";
import imagepicker from "../../assets/icons/image.svg";

const ImageUploader = ({ edit , active_element, uploadHandler }) => {

    const hiddenFileInput = React.useRef(null);

    console.log("edit , active_element",edit , active_element)

    const buttonClickHandler = ()=> {
         hiddenFileInput.current.click()
    }

    const handleChange = event => {
        uploadHandler(event)
        console.log(event)
      };
    

  return (
    <>
      {edit && (
        <>
          <img
            className="edit-button-options ml-1"
            src={imagepicker}
            onClick={buttonClickHandler}
          />
          <input id="image" ref={hiddenFileInput} type="file" style={{ display: "none" }} onChange={(event)=> handleChange(event)} />
        </>
      )}
    </>
  );
};

export default ImageUploader;
