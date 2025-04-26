import React from "react";

const KeyGraphic = () => {
  return (
    <div
      className="p-6 rounded-3xl text-black w-full max-w-sm mx-auto"
      style={{
        backgroundImage:
          "url('/images/handkey.png'), linear-gradient(to bottom, #FF4401, #FF5C1C)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
        height: "300px",
        width: "270px",
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-sm text-white font-semibold">Eyrie</p>
          <h2 className="text-3xl font-bold leading-tight mt-1">
            Your Next <br />
            <span className="text-white">Property</span>
          </h2>
          <p className="text-sm mt-2">
            Could just be <br /> few clicks away
          </p>
        </div>

        {/* The hand with keys image will be shown through the backgroundImage */}
        <div className="flex justify-end">
          {/* This is empty because the hand with keys is in the background image */}
        </div>
      </div>
    </div>
  );
};

export default KeyGraphic;
