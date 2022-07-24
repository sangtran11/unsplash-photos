import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
};

export default Loading;
