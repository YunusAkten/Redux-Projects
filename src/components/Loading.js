import React from "react";

function Loading() {
  return (
    <div className="loadingDiv">
      <h2 className="me-2">Loading </h2>
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
