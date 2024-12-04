import React from "react";

const GlobalLoader = () => {
  return (
    <div
      style={{
        height: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        top: "50%",
        opacity: 0.25,
        alignItems: "center",
        left: "50%",
        width: "100%",
        background: "#000",
        zIndex: 40,
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
      className=""
    >
      <div class="spinner"></div>
    </div>
  );
};

export default GlobalLoader;
