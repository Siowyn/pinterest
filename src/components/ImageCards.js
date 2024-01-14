import React from "react";
import "./images.css";

function ImageCards(props) {
  const getSizeStyles = (size) => {
    switch (size) {
      case "small":
        return "small";
      case "medium":
        return "medium";
      case "big":
        return "big";
      default:
        return "";
    }
  };

  const sizeClassName = getSizeStyles(props.size);

  return (
    <div className={`card ${sizeClassName}`}>
      <label htmlFor={`picture-${props.size}`} className="upload-link">
        Upload File
      </label>
      <input
        type="file"
        name={`picture-${props.size}`}
        id={`picture-${props.size}`}
        className="file-input"
      />
    </div>
  );
}

export default ImageCards;
