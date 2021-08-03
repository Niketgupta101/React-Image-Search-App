import React from "react";
import "../../App.css";

const ImagesItems = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.urls.small} alt="" />
        </div>
        <div className="card-back">
          <a href={item.links.download}>
            <button className="btn btn-outline-primary">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagesItems;
