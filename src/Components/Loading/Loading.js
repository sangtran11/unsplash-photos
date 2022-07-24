import React from "react";
import "./index.scss";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center loading">
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
};

export default Loading;
