import React from "react";

const KeyGraphic = () => {
  return (
    <div
      className="rounded-3xl text-black w-full max-w-sm mx-auto"
      style={{
        backgroundColor: "#FF4500",
        height: "358px",
        width: "286px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="p-6 h-full flex flex-col">
        <div>
          <p className="text-white text-sm font-semibold">Eyrie</p>
          <p>
            <br></br>
          </p>
          <h2 className="text-3xl font-bold leading-tight mt-1">
            Your Next <br />
            <span className="text-white">Property</span>
          </h2>
          <p
            className="text-2xl mt-1"
            style={{ zIndex: 1, position: "relative" }}
          >
            Could just be <br /> few clicks away
          </p>
        </div>

        {/* Hand with key overlay image */}
        <div className="absolute bottom-0 right-0 w-full flex justify">
          <img
            src="/images/handkey.png"
            alt="Hand holding keys"
            className="w-full"
            style={{
              mixBlendMode: "hard-light",
              transform: "translateY(30px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyGraphic;
