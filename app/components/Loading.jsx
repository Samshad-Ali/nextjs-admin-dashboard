import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <PropagateLoader color="#152238" />
    </div>
  );
};

export default Loading;
