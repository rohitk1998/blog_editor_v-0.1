import React, { useEffect, useState, createContext } from "react";
import plus from "../../assets/icons/addmore.png";
import searchicon from "../../assets/icons/search.svg";
import videopicker from "../../assets/icons/video.svg";
import embededpart from "../../assets/icons/embeded.svg";
import divider from "../../assets/icons/divider.svg";
import ImageUploader from "./ImageUploader";

const CustomEditor = () => {
  const [postcontent, setPostContent] = useState({});
  const [editoption, setEditOption] = useState(false);
  const [fields, setFields] = useState([{ index: 0, value: "" }]);
  const [activeElement, setActiveElement] = useState(0);

  const editable = React.createContext(editoption);

  const handleAddOrDeleteFields = (e) => {
    let current_index = fields.length;
    if (e.code === "Enter") {
      let values = [...fields];
      values.push({ index: Number(current_index), value: "" });
      setFields(values);
    } else if (e.code === "Backspace" && e.target.id > 0) {
      fields.map((item) => {
        if (item.index === Number(e.target.id)) {
          if (item.value.length === 0) {
            let values = [...fields];
            values.pop({ index: e.target.id, value: "" });
            setFields(values);
          }
        }
      });
    }
  };

  const handleInputText = (event) => {
    fields.map((field) => {
      if (event.target.files.lenght !== 0) {
        field.value = event.target.files[0];
        console.log(typeof event.target.files[0]);
        setFields([...fields], field[Number(event.target.id)]);
      }
      if (Number(event.target.id) === field.index) {
        field.value = event.target.value;
        setFields([...fields], field[Number(event.target.id)]);
      }
    });
  };

  const handlePostSubmit = () => {
    console.log("result :", fields);
  };

  const onFocus = (input_id) => {
    setActiveElement(input_id);
  };

  return (
    <>
      <div className="container-fluid custom-editor mt-2">
        <div className="row">
          <div className="col-sm-12">
            <h2>Custom Editor</h2>
          </div>
          {fields.map((fielddata, index) => {
            console.log(index, typeof fielddata.value);
            return (
              <>
                <div className="col-sm-10 d-flex flex-column align-items-start justify-content-start editor-box">
                  {!editoption &&
                    (typeof fielddata.value !== "object" ? (
                      <input
                        className="editor-input"
                        id={fielddata.index}
                        value={fielddata.value}
                        onKeyDown={(e) => handleAddOrDeleteFields(e)}
                        onChange={(e) => handleInputText(e)}
                        autoFocus={index > 0 ? index === index : index === 0}
                        onFocus={() => onFocus(index)}
                      />
                    ) : (
                      <img
                        src="https://images.unsplash.com/photo-1637434659088-cec7b7ea8646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                      />
                    ))}
                  {editoption && fielddata.index === Number(activeElement) ? (
                    <div className="d-flex flex-row align-items-start justify-content-start editor-box">
                      <ImageUploader
                        edit={editable}
                        active_element={activeElement}
                        uploadHandler={handleInputText}
                      />
                      <img
                        className="edit-button-options ml-1"
                        src={videopicker}
                        onClick={() => setEditOption(!editoption)}
                      />
                      <img
                        className="edit-button-options ml-1"
                        src={embededpart}
                        onClick={() => setEditOption(!editoption)}
                      />
                      <img
                        className="edit-button-options ml-1"
                        src={divider}
                        onClick={() => setEditOption(!editoption)}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {console.log(fielddata.index, activeElement)}
                {fielddata.index === Number(activeElement) ? (
                  <div className="col-sm-2">
                    <img
                      className="add-more-button"
                      src={plus}
                      onClick={() => setEditOption(!editoption)}
                    />
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-primary rounded mt-2"
        onClick={handlePostSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default CustomEditor;
